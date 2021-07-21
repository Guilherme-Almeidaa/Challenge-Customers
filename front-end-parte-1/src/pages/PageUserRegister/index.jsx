import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "../../api/usersApi";
import MineLoading from "../../components/MineLoading";
import context from "../../Provider/context";
import "./style.css";

function PageUserRegister() {
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
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    setMessage("");
  }, [setMessage]);
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setIsLoading(true);
      userRegister({ email, password })
        .then((_response) => {
          setStatusError(false);
          setMessage("Usuário cadastrado com sucesso");
          setIsLoading(false);
        })
        .catch((error) => {
          setStatusError(true);
          const message = error.message || error.response.data.error.message;
          setMessage(message);
          setIsLoading(false);
        });
    } else {
      setStatusError(true);
      setMessage("Confirmação de senha inválida");
    }
  };

  return (
    <section className="main-container-register">
      <div className="container-register">
        <h2 className="title-register">Cadastro</h2>
        <form onSubmit={handlerSubmit} className="form-register">
          <div className="container-input">
            <input
              onChange={({ target }) => setEmail(target.value)}
              value={email}
              className="input-register"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <div className="underline"></div>
          </div>
          <div className="container-input">
            <input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="input-register"
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
            />
            <div className="underline"></div>
          </div>
          <div className="container-input">
            <input
              onChange={({ target }) => setConfirmPassword(target.value)}
              value={confirmPassword}
              className="input-register"
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirmar senha"
            />
            <div className="underline"></div>
          </div>
          {isLoading ? <MineLoading /> : ""}
          <p style={{ color: statusError ? "red" : "green" }}>{message}</p>
          <button className="button-register" type="submit">
            Cadastrar
          </button>

          <Link to="/" className="button-register-link">
            Voltar
          </Link>
        </form>
      </div>
    </section>
  );
}

export default PageUserRegister;
