import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Details from "./Components/Produits/Details";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Formulaire/Login/Login"
import { CartProvider } from "./hook/useCart";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/connexion" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
