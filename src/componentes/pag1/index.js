import React from "react";
import { Link } from "react-router-dom";


export default function Page1 (props){
    return (
        <div className="container">
        <div className="logo">
          <img src="assets/img/logo.png" alt=""/>
          <h1>
            ZapRecall
          </h1>
        </div>
        <Link to="/game">
        <button className="start">
          <h2> Iniciar Recall! </h2>
        </button> 
        </Link>
        </div>
    );
}