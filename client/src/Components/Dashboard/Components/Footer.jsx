import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Professora Elaine</span>
          <span>Projeto Integrador</span>
          <span>Ideias</span>
          <span>Fontes</span>
          <span>Créditos</span>
          
        </div>
        <div className="footer-section-columns">
          <span>11999479666</span>
          <span>senac@food.com</span>
          <span>senacsp@food.com</span>
          <span>contact@senac.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos e condições</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
