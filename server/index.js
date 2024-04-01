//dependencias
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())
//iniciando server

app.listen(3002, () => {
    console.log('o server está rodando na porta 3002')
})

//conexao com databse(mysql)
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    passsword: '',
    database: 'decidakidb',
})

//criando rotas para cadastrar usuarios

app.post('/register', (req, res) => {
    //variaveis sendo inseridas para o form
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    //inserindo usuario ao banco nas tabelas
    const SQL = 'INSERT INTO Users (email, username, password) VALUES (?,?,?)'

    // vizualizando valores atribuidos ao value
    const Values = [sentEmail,sentUserName,sentPassword  ]

    //executando consulta
    db.query(SQL, Values, (err, results) =>{
        //tratativas de erros
        if(err){
            res.send(err)
        }
        else{
            console.log('o usuario foi inserido com sucesso!')
            res.send({message: 'Usuario adicionado!'})
        }
    })
})
app.post('/login', (req, res) =>{
    //variaveis sendo inseridas para o form
    const sentLoginUserName = req.body.loginUserName
    const sentLoginPassword = req.body.loginPassword

    //buscando usuario no banco de dados
    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'

    // vizualizando valores atribuidos ao value
    const Values = [sentLoginUserName,sentLoginPassword]

    //executando consulta
    db.query(SQL, Values, (err, results) =>{
       if(err){
        res.send({error: err})
       }
       if(results.length > 0){
        res.send(results)
       }else{
        res.send({message: 'Usuario não encontrado!'})
       }
    })
})

