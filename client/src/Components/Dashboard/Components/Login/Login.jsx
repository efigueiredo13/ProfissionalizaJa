import React, { useEffect, useState } from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

//importando os assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

//importando icones
import { FaUserShield } from 'react-icons/fa'
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";


const Login = () => {
  //useState para pegar os dados do formulario
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  //apresentando mensagens para o usuario
  const [loginStatus, setLoginStatus] = useState('')
  const [statusHolder, setstatusHolder] = useState('message')

  const loginUser = (e) => {
    //indentificando erros
    e.preventDefault()

    Axios.post('http://localhost:3002/login', {
      //variaveis para ser adicionadas na rota
      loginUserName: loginUserName,
      loginPassword: loginPassword
    }).then((response) => {
      if (response) {
        console.log(response)
      }
      if (response.data.message || loginUserName == '' || loginPassword == '') {
        //caso não encontre o usuario
        navigateTo('/') //ira para a mesma tela de login
        setLoginStatus('Usuario não existente!')
      } else {
        navigateTo('/dashboard') //caso de tudo certo navegue para o dashboard
      }
    })
  }

  useEffect(() => {
    if (loginStatus !== '') {
      setstatusHolder('showMessage') //mostrando a mensagem
      setTimeout(() => {
        setstatusHolder('message') //4 s
      }, 4000);
    }
  }, [loginStatus])


  //limpando formulario depois de preenchido
  const onSubmit = () => {
    setLoginUserName('')
    setLoginPassword('')
  }

  return (
    <div className='loginPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoPlay muted loop> </video>

          <div className='textDiv'>
            <h2 className='title'>Decida o seu futuro!</h2>
            <p>Entenda sobre você!</p>
          </div>

          <div className='footerDiv flex'>
            <span className="text">Não tem uma conta?</span>
            <Link to={'/register'}>
              <button className='btn'>Cadastre-se</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3> Bem vindo de volta!</h3>
          </div>

          <form action="" className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username"> Username </label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder='Enter username'
                  onChange={(event) => { setLoginUserName(event.target.value) }} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password"> Password </label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="password" id="password" placeholder='Enter Password'
                  onChange={(event) => { setLoginPassword(event.target.value) }} />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className='forgotPassword'>
              Esqueceu sua senha? <a href=''>Clique aqui</a>
            </span>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login