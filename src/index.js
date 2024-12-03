import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<h1>Simples Roteamento com path</h1>} />
        <Route path="contact/:way" element={<Contato/>} />
        <Route path="*" element={<h1>Nnehuma página encontrada</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
