import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex-col justify-center align-center footer ">
      <p className="center">
        Made with ♥ by
        <a
          href="https://grimoire-numerique.re/"
          target="_blank"
          rel="noreferrer"
          className="grimoire"
        >
          Grimoire Numérique <small>®</small>
        </a>
      </p>
      <Link to="/Mentions">
        <small className="small">Mentions Légales</small>
      </Link>
    </footer>
  );
}

export default Footer;
