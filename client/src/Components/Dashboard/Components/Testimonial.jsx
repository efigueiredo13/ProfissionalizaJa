import React from "react";
import fotoss from "../Assets/fotoss.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Agradecimentos</p>
        <h1 className="primary-heading">Obrigado a todos!</h1>
        <p className="primary-text">
          Agradecemos a todos que ficaram até aqui,
          esperamos que tenham se achado e buscado o melhor da vida.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={fotoss} alt="" />
        <p>
          
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          
        </div>
        <h2>Lucas Pires Ferraz, Caio Gabriel, Marcela Andrade, Victoria Wellem.</h2>
      </div>
    </div>
  );
};

export default Testimonial;
