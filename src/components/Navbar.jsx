import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between navbar">
      <Link to="/">Accueil</Link>
      <Link to="/Podcast">Nos Podcasts</Link>
      <Link to="/Fans">Allé dit partou</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
