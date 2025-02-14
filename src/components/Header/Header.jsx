import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import "./Header.css";

function Header() {
  return (
    <div className="body">
      <div className="container">
        <Logo isHeader />
        <div className="search-box">
          <input
            type="text"
            name="pesquisar"
            id="pesquisar"
            placeholder="Pesquisar produto..."
          />
        </div>
        <div className="user-actions">
          <a href="/cadastro" className="cadastro">
            Cadastre-se
          </a>
          <a href="/login" className="entrar">
            <strong>Entrar</strong>
          </a>
          <div className="img-cart">
            <img src="/src/assets/mini-cart.svg" alt="Carrinho de compras" />
          </div>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/categorias">Categorias</a>
            </li>
            <li>
              <a href="/meus-pedidos">Meus Pedidos</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
