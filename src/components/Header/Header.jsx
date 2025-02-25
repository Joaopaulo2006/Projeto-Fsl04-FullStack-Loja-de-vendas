import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import "./Header.css";
import cartIcon from "../../assets/mini-cart.svg";

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
          <NavLink to="/cadastro" className="cadastro">
            Cadastre-se
          </NavLink>
          <NavLink to="/login" className="entrar">
            <strong>Entrar</strong>
          </NavLink>
          <div className="img-cart">
            <img src={cartIcon} alt="Carrinho de compras" />
          </div>
        </div>

        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Produtos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/categories"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Categorias
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/orders"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
