import React, { useContext, useEffect, useState } from "react";
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

  const handlerSubmit = (e) => {
    e.preventDefault();
    const vehicles = customer.vehicle.map((item) => item.id);

    requestCreateCustomer({ ...customer, vehiclesId: vehicles })
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
    setDenyEdtion(false);
    setMessage("");
    setCustomer(initialCustomer);
  }, [setCustomer, initialCustomer, setDenyEdtion, setMessage]);

  return (
    <div>
      <h1>Formulário de Castramento</h1>
      <Form
        handlerSubmit={handlerSubmit}
        message={message}
        statusError={statusError}
      />
    </div>
  );
}

export default PageRegisterCustomer;
