import React from "react";
import getPerguntasData from './perguntasData';
import Pergunta from './pergunta';

export default function Game (props){
    
    var perguntas = getPerguntasData();
    
    return (
        <div className="container">
        <div className="mini-logo">
          <img src="assets/img/logo-pequeno.png" alt=""/>
          <h1>
            ZapRecall
          </h1>
        </div>
        <ul>
          {perguntas.map((pergunta, index) => <Pergunta {...pergunta} key={index}/>)}
        </ul>
        
        </div>
    );
}