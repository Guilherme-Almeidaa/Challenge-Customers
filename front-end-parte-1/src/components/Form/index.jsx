import React, { useContext } from "react";
import context from "../../Provider/context";
import states from "../../utilities/states";
import "./style.css";

function Form({ handlerSubmit }) {
  const {
    customer,
    setCustomer,
    vehicles,
    formatDate,
    denyEdition,
    statusError,
    message,
  } = useContext(context);

  console.log(customer.service_date);
  const handlerChange = ({ target }) => {
    const name = target.name;
    if (name === "service_date") {
      setCustomer({ ...customer, [name]: formatDate(target.value) });
    } else {
      setCustomer({ ...customer, [name]: target.value });
    }
  };

  const handlerChangeCheckBox = ({ target }) => {
    const name = "vehicle";
    const vehicleInsert = { id: Number(target.id), type: target.value };
    const { vehicle } = customer;
    if (vehicle.some((item) => item.id === Number(target.id))) {
      const vehiclesLeftover = vehicle;
      vehiclesLeftover.splice(vehiclesLeftover.indexOf(vehicleInsert), 1);
      setCustomer({ ...customer, [name]: vehiclesLeftover });
    } else {
      setCustomer({
        ...customer,
        [name]: [...customer.vehicle, vehicleInsert],
      });
    }
  };

  const checkIncludesVehicle = (vehicle) => {
    return customer.vehicle.map((item) => item.id).includes(Number(vehicle.id));
  };

  const mockVehicles = [
    {
      id: 1,
      type: "Carro",
    },
    {
      id: 2,
      type: "Caminhão",
    },
    {
      id: 3,
      type: "Moto",
    },
  ];

  const vehiclesSelect = vehicles.length !== 0 ? mockVehicles : vehicles;

  return (
    <section className="container-form">
      <form onSubmit={handlerSubmit}>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="type">
              Tipo de cliente
            </label>
            <select
              disabled={denyEdition}
              required
              className="select-form"
              id="type"
              name="type"
              value={customer.type}
              onChange={handlerChange}
            >
              <option className="options" disabled value="">
                Selecione
              </option>
              <option className="options" value="Pessoa Física">
                Pessoa Física
              </option>
              <option className="options" value="Pessoa Jurídica">
                Pessoa Jurídica
              </option>
            </select>
          </div>
          <div className="container-radio">
            <label className="label-form" htmlFor="status">
              Status
            </label>
            <div>
              <label
                style={{
                  color:
                    customer.status.toString() === "true"
                      ? "steelblue"
                      : "black",
                }}
                htmlFor="active"
              >
                {" "}
                <input
                  onChange={handlerChange}
                  disabled={denyEdition}
                  checked={customer.status.toString() === "true"}
                  required
                  className="input-form-radio"
                  id="active"
                  name="status"
                  type="radio"
                  value={"true"}
                />{" "}
                Ativo
              </label>

              <label
                style={{
                  color:
                    customer.status.toString() === "false"
                      ? "steelblue"
                      : "black",
                }}
                htmlFor="inactive"
              >
                {" "}
                <input
                  onChange={handlerChange}
                  disabled={denyEdition}
                  checked={customer.status.toString() === "false"}
                  className="input-form-radio"
                  id="inactive"
                  name="status"
                  type="radio"
                  value="false"
                />
                Inativo
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="name">
              {customer.type === "Pessoa Jurídica"
                ? "Nome fantasia"
                : "Nome o cliente"}
            </label>
            <input
              readOnly={denyEdition}
              required
              className="input-form"
              type="text"
              name="name"
              id="name"
              value={customer.name}
              onChange={handlerChange}
              placeholder={
                customer.type === "Pessoa Jurídica"
                  ? "Nome fantasia"
                  : "Nome o cliente"
              }
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="lastName">
              {customer.type === "Pessoa Jurídica"
                ? "Razão social"
                : "Sobrenome do Cliente"}
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="text"
              name="lastName_corporateName"
              id="lastName"
              value={customer.lastName_corporateName}
              placeholder={
                customer.type === "Pessoa Jurídica"
                  ? "Razão social"
                  : "Sobrenome do Cliente"
              }
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="cpf">
              {customer.type === "Pessoa Jurídica" ? "CNPJ" : "CPF"}
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="text"
              name="cpf_cnpj"
              id="cpf"
              value={customer.cpf_cnpj}
              placeholder={customer.type === "Pessoa Jurídica" ? "CNPJ" : "CPF"}
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="email">
              Email
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="email"
              name="email"
              id="email"
              value={customer.email}
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
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="text"
              name="road"
              id="road"
              value={customer.road}
              placeholder="Rua"
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="number">
              Número
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="text"
              name="number"
              id="number"
              value={customer.number}
              placeholder="Número"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form" htmlFor="cep">
              Cep
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="text"
              name="cep"
              id="cep"
              value={customer.cep}
              placeholder="Cep"
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="city">
              Cidade
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="text"
              name="city"
              id="city"
              value={customer.city}
              placeholder="Cidade"
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="state">
              Estado
            </label>
            <select
              onChange={handlerChange}
              disabled={denyEdition}
              value={customer.state}
              required
              className="select-form"
              id="state"
              name="state"
            >
              <option className="options" disabled value="">
                Selecione
              </option>
              {states.map((state, index) => {
                return (
                  <option
                    readOnly={denyEdition}
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
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="time"
              name="service_hours"
              id="time"
              value={customer.service_hours}
              placeholder="Cidade"
            />
          </div>
          <div className="container-input">
            <label className="label-form" htmlFor="date">
              Dia do atendimento
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              required
              className="input-form"
              type="date"
              name="service_date"
              id="date"
              value={formatDate(customer.service_date)}
              placeholder="Cidade"
            />
          </div>
          <div className="container-input-tel">
            <label className="label-form" htmlFor="telephone">
              Telefone do Cliente
            </label>
            <input
              onChange={handlerChange}
              readOnly={denyEdition}
              className="input-form"
              type="text"
              name="telephone"
              id="telephone"
              value={customer.telephone}
              placeholder="Telefone"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="container-input">
            <label className="label-form">Veículos ultilizados</label>
            {vehiclesSelect.map((vehicle, index) => {
              return (
                <label
                  style={{
                    color: checkIncludesVehicle(vehicle)
                      ? "steelblue"
                      : "black",
                  }}
                  key={index}
                  htmlFor={vehicle.id}
                >
                  {" "}
                  <input
                    onChange={handlerChangeCheckBox}
                    checked={checkIncludesVehicle(vehicle)}
                    disabled={denyEdition}
                    className="input-form-checkbox"
                    id={vehicle.id}
                    name={vehicle.type}
                    type="checkbox"
                    value={vehicle.type}
                  />{" "}
                  {vehicle.type}
                </label>
              );
            })}
          </div>
        </fieldset>
        <h3
          className="message"
          style={{ color: statusError ? "red" : "green" }}
        >
          {message}
        </h3>
        <div
          style={{ display: denyEdition ? "none" : "flex" }}
          className="container-button"
        >
          <button type="submit" className="button-submit">
            Confirmar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
