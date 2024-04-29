import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import code from "../Assets/code.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Bem vindo ao nosso mundo universitário!
          </h1>
          <p className="primary-text">
          Aqui você verá e conhecerá o curso que mais combina com você sem se preocupar em ingressar em um curso e não gostar, 
          clique aqui e veja o universo de opções que mais combinam com você.
          </p>
          <button className="secondary-button">
            Clique aqui! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={code} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
