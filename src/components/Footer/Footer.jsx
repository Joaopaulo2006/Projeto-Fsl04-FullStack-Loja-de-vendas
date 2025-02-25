import React from "react";
import Logo from "../Logo/Logo.jsx";
import Informations from "./informations.jsx";
import "./Footer.css";
const Footer = () => {
  const aboutLinks = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/careers" },
    { text: "Meus Pedidos", link: "/orders" },
  ];

  const categoryLinks = [
    { text: "Camisetas", link: "/category/shirts" },
    { text: "Calças", link: "/category/pants" },
    { text: "Bonés", link: "/category/caps" },
    { text: "Headphones", link: "/category/headphones" },
    { text: "Tênis", link: "/category/shoes" },
  ];

  const contactInfo = [
    {
      text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
      link: "",
    },
    { text: "(85) 3051-3411", link: "tel:+558530513411" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Logo color="white" className="Logo" />
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src\assets\facebook.svg" alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src\assets\twitter.svg" alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="src\assets\instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <Informations title="Informação" informations={aboutLinks} />
          <Informations title="Categorias" informations={categoryLinks} />
          <Informations title="Contato" informations={contactInfo} />
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
};
export default Footer;
