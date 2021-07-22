import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { userLogin } from "../../api/usersApi";
import MineLoading from "../../components/MineLoading";
import { isAuthenticated } from "../../services/checkAutendicate";
import context from "../../Provider/context";
import "./style.css";

function PageLogin() {
  const {
    setMessage,
    message,
    statusError,
    setStatusError,
    isLoading,
    setIsLoading,
  } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const token = localStorage.getItem("token");

  useEffect(() => {
    setMessage("");
  }, [setMessage]);
  const handlerSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    userLogin({ email, password })
      .then((response) => {
        setStatusError(false);
        localStorage.setItem("token", response.token);
        setMessage("");
        setTimeout(() => {
          history.push("/customers");
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setStatusError(true);
        const message = error.response
          ? error.response.data.error.message
          : error.message;
        setMessage(message);
        setIsLoading(false);
      });
  };

  if (isAuthenticated(token)) {
    return <Redirect to="/customers" />;
  }

  return (
    <section className="main-container-login">
      <div className="container-login">
        <h2 className="title-login">Login</h2>
        <form onSubmit={handlerSubmit} className="form-login">
          <div className="container-input">
            <input
              required
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className="input-login"
              type="email"
              name="email"
              id="email"
              placeholder="Entre con seu email"
            />
            <div className="underline"></div>
          </div>
          <div className="container-input">
            <input
              required
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="input-login"
              type="password"
              name="password"
              id="password"
              placeholder="Entra com sua senha"
            />
            <div className="underline"></div>
          </div>
          {isLoading ? <MineLoading /> : ""}
          <p style={{ color: statusError ? "red" : "green" }}>{message}</p>
          <button className="button-login" type="submit">
            Login
          </button>
          <Link to="/user/register" className="button-login-link">
            Não tenho conta
          </Link>
        </form>
      </div>
    </section>
  );
}

export default PageLogin;
