import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Component, useState} from "react";
import Page1 from "./componentes/pag1"
import Game from "./componentes/game"

export default function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="" element={<Page1/>} />   
    <Route path="/game" element={<Game/>} />
    </Routes>
    </BrowserRouter>
  );
}
