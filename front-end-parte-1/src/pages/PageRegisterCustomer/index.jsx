import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import context from "../../Provider/context";
import Form from "../../components/Form";
import "./style.css";
import { requestCreateCustomer } from "../../api/customersApi";

function PageRegisterCustomer() {
  const {
    setCustomer,
    setDenyEdtion,
    customer,
    message,
    setMessage,
    statusError,
    setStatusError,
  } = useContext(context);
  const [initialCustomer] = useState({
    name: "",
    lastName_corporateName: "",
    type: "Pessoa Física",
    status: "",
    cpf_cnpj: "",
    email: "",
    telephone: "",
    service_hours: "",
    service_date: "",
    cep: "",
    road: "",
    number: "",
    city: "",
    state: "",
    vehicle: [],
  });

  const token = localStorage.getItem("token");

  const handlerSubmit = (e) => {
    e.preventDefault();
    const vehicles = customer.vehicle.map((item) => item.id);
    if (vehicles.length === 0) return window.alert("Selecione um veículo");
    requestCreateCustomer({ ...customer, vehiclesId: vehicles }, token)
      .then((_response) => {
        setMessage("Cliente cadastrado com sucesso");
        setStatusError(false);
      })
      .catch((_error) => {
        setMessage("Ops algo deu errado");
        setStatusError(true);
      });
  };

  useEffect(() => {
    setMessage("");
  }, [setMessage]);

  useEffect(() => {
    setDenyEdtion(false);
    setMessage("");
    setCustomer(initialCustomer);
  }, [setCustomer, initialCustomer, setDenyEdtion, setMessage]);

  return (
    <div>
      <Header />
      <section>
        <h1>Formulário de Castramento</h1>
        <Form
          handlerSubmit={handlerSubmit}
          message={message}
          statusError={statusError}
        />
      </section>
    </div>
  );
}

export default PageRegisterCustomer;
