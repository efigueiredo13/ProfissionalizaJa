import React from "react";
import AboutBackground from "../Assets/about-background.png";
import code2 from "../Assets/code2.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={code2} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Sobre nós
        </h1>
        <p className="primary-text">
        Nossa equipe tem o intuito de te mostrar qual a melhor opção de curso para você, 
        nós tivemos esse intuito devido ver que muitos escolhem um curso e se frustram logo após os primeiros semestre e por isso decidimos mudar isso.
        </p>
        <p className="primary-text">
          Aqui você terá um leque de conhecimento que irá mudar sua vida
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leia mais sobre nós</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Veja um vídeo experimental
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
