import React from 'react'
import './Register.css'
import '../../App.css'
import { Link } from 'react-router-dom'

//importando os assets
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'


//importando icones
import { FaUserShield } from 'react-icons/fa'
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";



export const Register = () => {
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
              <label htmlFor="username"> Username </label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder='Enter username' />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="email"> Email </label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder='Enter Email' />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password"> Password </label>
              <div className="input flex">
                <BsFillShieldLockFill   className="icon" />
                <input type="text" id="password" placeholder='Enter Password' />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Register</span>
              <AiOutlineSwapRight   className="icon" />
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

export default Register