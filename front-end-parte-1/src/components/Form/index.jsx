import React, { useState } from "react";
import states from "../../utilities/states";
import "./style.css";

function Form() {
  const [type, setType] = useState("");
  return (
    <section className="container-form">
      <form>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="type">
              Tipo de cliente
            </label>
            <select
              required
              onChange={({ target }) => setType(target.value)}
              className="select-form"
              id="type"
              value={type}
            >
              <option className="options" disabled value="">
                Selecione
              </option>
              <option className="options" value="physical">
                Pessoa Física
              </option>
              <option className="options" value="legal">
                Pessoa Jurídica
              </option>
            </select>
          </div>
          <div className="container-radio">
            <label className="label-form" htmlFor="status">
              Status
            </label>
            <div>
              <label htmlFor="active">
                {" "}
                <input
                  required
                  className="input-form-radio"
                  id="active"
                  name="status"
                  type="radio"
                  value="active"
                />{" "}
                Ativo
              </label>

              <label htmlFor="inactive">
                {" "}
                <input
                  className="input-form-radio"
                  id="inactive"
                  name="status"
                  type="radio"
                  value="inactive"
                />
                Inativo
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="name">
              {type === "legal" ? "Nome fantasia" : "Nome o cliente"}
            </label>
            <input
              required
              className="input-form"
              type="text"
              name="name"
              id="name"
              placeholder={
                type === "legal" ? "Nome fantasia" : "Nome o cliente"
              }
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="lastName">
              {type === "legal" ? "Razão social" : "Sobrenome do Cliente"}
            </label>
            <input
              required
              className="input-form"
              type="text"
              name="lastName"
              id="lastName"
              placeholder={
                type === "legal" ? "Razão social" : "Sobrenome do Cliente"
              }
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="cpf">
              {type === "legal" ? "CNPJ" : "CPF"}
            </label>
            <input
              required
              className="input-form"
              type="text"
              name="cpf"
              id="cpf"
              placeholder={type === "legal" ? "CNPJ" : "CPF"}
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="email">
              Email
            </label>
            <input
              required
              className="input-form"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="road">
              Rua
            </label>
            <input
              required
              className="input-form"
              type="text"
              name="road"
              id="road"
              placeholder="Rua"
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="number">
              Número
            </label>
            <input
              required
              className="input-form"
              type="text"
              name="number"
              id="number"
              placeholder="Número"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="city">
              Cidade
            </label>
            <input
              required
              className="input-form"
              type="text"
              name="city"
              id="city"
              placeholder="Cidade"
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="state">
              Estado
            </label>
            <select required className="select-form" id="state">
              <option className="options" disabled value="">
                Selecione
              </option>
              {states.map((state, index) => {
                return (
                  <option
                    key={index}
                    className="options"
                    value={Object.values(state)}
                  >
                    {`${Object.keys(state)} - ${Object.values(state)}`}
                  </option>
                );
              })}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="time">
              Hoŕario final de atendimento
            </label>
            <input
              required
              className="input-form"
              type="time"
              name="time"
              id="time"
              placeholder="Cidade"
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="date">
              Dia do atendimento
            </label>
            <input
              required
              className="input-form"
              type="date"
              name="date"
              id="date"
              placeholder="Cidade"
            />
          </div>
        </fieldset>
        <div className="container-input">
          <label className="label-form">Veículos ultilizados</label>
          <label htmlFor="car">
            {" "}
            <input
              className="input-form-radio"
              id="car"
              name="vehicle"
              type="checkbox"
              value="car"
            />{" "}
            Carro
          </label>

          <label htmlFor="truck">
            {" "}
            <input
              className="input-form-radio"
              id="truck"
              name="vehicle"
              type="checkbox"
              value="truck"
            />
            Caminhão
          </label>
          <label htmlFor="motorcycle">
            {" "}
            <input
              className="input-form-radio"
              id="motorcycle"
              name="vehicle"
              type="checkbox"
              value="motorcycle"
            />
            Caminhão
          </label>
        </div>
        <div className="container-button">
          <button type="submit" className="button-submit">
            Confirmar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
