import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/LogLife-Logo.jpeg";
import "./style.css";

function Header() {
  const [active, setStatus] = useState(false);

  return (
    <header className="header">
      <div className="container-menu-hamburguer">
        <input
          onChange={() => setStatus(!active)}
          checked={active}
          type="checkbox"
          id="checkbox-menu"
        />
        <label className="label-header" htmlFor="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <img className="logo" src={logo} alt="logo" />
      <ul className="menu">
        <li className="item-menu">
          <Link to="/" className="link">
            Lista de Clientes
          </Link>{" "}
        </li>
        <li className="item-menu">
          <Link to="/register" className="link">
            Adicionar Cliente
          </Link>{" "}
        </li>
      </ul>
      <ul
        style={{ display: active ? "block" : "none" }}
        className="menu-mobile"
      >
        <li className="item-menu">
          <Link to="/" className="link">
            Lista de Clientes
          </Link>{" "}
        </li>
        <li className="item-menu">
          <Link to="/register" className="link">
            Adicionar Cliente
          </Link>{" "}
        </li>
      </ul>
    </header>
  );
}

export default Header;
