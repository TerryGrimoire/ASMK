import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Navbar from "./Navbar";
import burger from "../assets/menu.png";
import logo from "../assets/logo.png";

function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="flex padding-header justify-between align-center">
      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className="mobile no-button"
      >
        <img
          src={burger}
          alt="menu de navigation sur le site internet - trois lignes de navigation"
        />
      </button>
      <Link to="/">
        <img
          src={logo}
          alt="logo Atas Sintir Met Kask - ile de la reunion avec un casque en bas"
          className="logo"
        />
      </Link>
      {openBurger && <Nav setOpenBurger={setOpenBurger} />}
      <div className="desktop">
        <Navbar setOpenBurger={setOpenBurger} />
      </div>
    </header>
  );
}

export default Burger;
