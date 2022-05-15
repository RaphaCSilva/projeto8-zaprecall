import React from "react";

export default function Game (props){
    return (
        <>
        <div className="logo">
          <img src="assets/img/logo.png" alt=""/>
          <h1>
            ZapRecall
          </h1>
        </div>
        <button className="start">
          <h2> Iniciar Recall! </h2>
        </button>
        </>
    );
}