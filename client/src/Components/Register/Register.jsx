import React, { useState } from 'react'
import './Register.css'
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
import { MdMarkEmailRead } from "react-icons/md";



const Register = () => {

  //useState para pegar os dados do formulario
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()

  //onclick -- criando o usuario

  const createUser = (e) => {

    e.preventDefault()

    Axios.post('http://localhost:3002/register', {
      //variaveis para ser adicionadas na rota
      Email: email,
      UserName: userName,
      Password: password
    }).then(() => {
      // console.log('o usuario foi criado')
      navigateTo('/')

      //limpando valores dos inputs
      setEmail('')
      setPassword('')
      setUserName('')
    })
  }

 

  return (
    <div className='registerPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <video src={video} autoplay muted loop> </video>

          <div className='textDiv'>
            <h2 className='title'>Decida o seu futuro!</h2>
            <p>Entenda sobre você!</p>
          </div>

          <div className='footerDiv flex'>
            <span className="text">Já possui uma conta?</span>
            <Link to={'/'}>
              <button className='btn'>Entre</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3> Faça seu cadastro!</h3>
          </div>

          <form action="" className='form grid'>

            <div className="inputDiv">
              <label htmlFor="email"> Email </label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder='Enter Email'
                  onChange={(event) => { setEmail(event.target.value) }} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username"> Username </label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder='Enter username'
                  onChange={(event) => { setUserName(event.target.value) }} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password"> Password </label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input type="text" id="password" placeholder='Enter Password'
                  onChange={(event) => { setPassword(event.target.value) }} />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register