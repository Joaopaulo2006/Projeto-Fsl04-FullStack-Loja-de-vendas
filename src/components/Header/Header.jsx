import React from "react";
import Logo from "../Logo/Logo.jsx";
import "./Header.css";

function Header() {
  return (
    <div className="body">
      <div className="container">
        <Logo isHeader />
        <input
          type="text"
          name="pesquisar"
          id="pesquisar"
          placeholder="Pesquisar produto..."
        />
        <a href="" className="Cadastro">
          Cadastre-se
        </a>
        <a href="#" className="Entrar">
          <strong>Entrar</strong>
        </a>
        <div className="img-cart"></div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Produtos</li>
            <li>Categorias</li>
            <li>Meus Pedidos</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
