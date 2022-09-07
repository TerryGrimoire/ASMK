import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex-col justify-center align-center footer ">
      <p>Fait par Terry Grimoire</p>
      <Link to="/Mentions">
        <p className="small">Mentions Légales</p>
      </Link>
    </footer>
  );
}

export default Footer;
