import React from "react";
import LogoH from "../../assets/logo-header.svg";
import LogoF from "../../assets/logo-footer.svg";

const Logo = ({ isHeader }) => {
  const logoSrc = isHeader ? LogoH : LogoF;
  const logoAlt = isHeader ? "Logo Header" : "Logo Footer";

  return <img src={logoSrc} alt={logoAlt} width={253} height={44} />;
};

export default Logo;
