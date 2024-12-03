// Contato.js
import React from "react";
import { useParams, useNavigate } from "react-router";

const Contato = () => {

  const { way } = useParams();
  const navigate = useNavigate();

  const handleChangeWay = () => {
    const randomWay = Math.random().toString(36).substring(7);
    navigate(`/contact/${randomWay}`);
    console.log(randomWay);
  };

  return (
    <div>
      <h1>Contato</h1>
      <p>Esta é a página de contato com rota dinâmica</p>
      <p>Seu caminho é: {way}</p>
      <button onClick={handleChangeWay}>Mudar Caminho</button>
    </div>
  );
};

export default Contato;