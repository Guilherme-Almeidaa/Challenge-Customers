import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { requestFindByName } from "../../api/customersApi";
import logo from "../../images/LogLife-Logo.jpeg";
import searchIcon from "../../images/search-icon.png";
import context from "../../Provider/context";
import "./style.css";

function Header() {
  const [active, setStatus] = useState(false);
  const { setCustomers, search, setSearch, isLoading, setIsLoading } =
    useContext(context);

  useEffect(() => {
    setIsLoading(true);
    requestFindByName(search).then((response) => {
      setCustomers(response);
    });
    setIsLoading(false);
  }, [search, setCustomers, isLoading, setIsLoading]);

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
      <div className="container-menu-mobile">
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
      </div>
      <div className="search-container">
        <input
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          className="search-input"
          type="text"
          placeholder="Pesquisa pelo nome"
        />
        <input
          id="button-search"
          type="text"
          name="search"
          style={{ display: "none" }}
        />
        <label className="label-search" htmlFor="button-search">
          <img className="icon-search" src={searchIcon} alt="search-icon" />
        </label>
      </div>
    </header>
  );
}

export default Header;
