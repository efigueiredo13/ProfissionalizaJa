import React from "react";
import sistemasInformacao from "../Assets/sistemasdeinformacao.png";
import cienciasComputacao from "../Assets/cienciascomputacao.png";
import analise from "../Assets/ads.png";
import gestao from "../Assets/gestao.jpg";
import redes from "../Assets/redes.png";

const Work = () => {
  const workInfoData = [
    {
      image: sistemasInformacao,
      title: "Sistemas de informação",
      text: "Aqui temos um curso para você que quer um bem completo buscando aprender tanto sobre programação, gestão e Design de sistemas, este curso entrega um leque de informações.",
    },
    {
      image: cienciasComputacao,
      title: "Ciências da computação",
      text: " Aqui você poderá focar diretamente na mágica da computação um curso muito mais técnico e objetivo na parte da programação. ",
    },
    {
      image: analise,
      title: "Análise e desenvolvimento de sistemas",
      text: "Aqui é para você que quer aprender sem ficar 4 anos no mesmo curso, este de 2 anos e meio entrega um leque de conhecimento principalmente e objetivamente na parte de programação FullStack.",
    },
    {
      image: gestao,
      title: "Gestão da Tecnologia da informação",
      text: "  Aqui é para você aluno com um perfil de líder, que gosta de fazer projetos e tem facilidade com pessoas, aqui você aprende sobre como fazer uma boa gestão tecnológica. ",
    },
    {
      image: redes,
      title: "Redes de computadores",
      text: "Aqui temos o que está por trás de toda a internet as redes, onde você poderá ver como funciona as configurações e descobrir a mágica de IP e rede.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Hora do trabalho</p>
        <h1 className="primary-heading">Cursos Disponíveis </h1>
        <p className="primary-text">
        Aqui teremos os cursos que você pode escolher e tomar a melhor decisão:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
