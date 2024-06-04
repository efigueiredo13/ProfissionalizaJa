const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: '127.0.0.1', // especificando o IP do servidor
    user: 'root', // altere para seu usuário do MySQL
    database: 'decidakidb',
    port: 3306 // especificando a porta do MySQL
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL', err);
    } else {
        console.log('Connected to MySQL');
    }
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.status(201).send('User registered successfully');
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('Both email and password are required');
    }
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    
    db.query(query, [email, password], (err, results) => {
        if (err) {
            res.status(400).send(err.message);
        } else if (results.length === 0) {
            res.status(401).send('Invalid credentials');
        } else {
            res.status(200).send('Login successful');
        }
    });
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => { // modificando para escutar em todas as interfaces de rede
    console.log(`Server is running on port ${port}`);
});
