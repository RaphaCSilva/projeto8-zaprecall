import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {Component, useState} from "react";
import Page1 from "./componentes/pag1"
import Game from "./componentes/game"

export default function App() {
  return (
    <BrowserRouter>
    <Page1></Page1>
    <Routes>
      <Route path="/game" element={<Game/>} />
    </Routes>
    </BrowserRouter>
  );
}
