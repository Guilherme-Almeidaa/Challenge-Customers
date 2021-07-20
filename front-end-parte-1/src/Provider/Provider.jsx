import React, { useState, useEffect } from "react";
import {
  requestGetAllVehicles,
  requestAllCustomers,
} from "../api/customersApi";
import Context from "./context";

function Provider({ children }) {
  const initialCustomer = {
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
  };
  const [vehicles, setVehicles] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState(initialCustomer);
  const [denyEdition, setDenyEdtion] = useState(false);
  const [message, setMessage] = useState("");
  const [statusError, setStatusError] = useState(false);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checkToken, setCheckToken] = useState(false);

  const token = localStorage.getItem("token");

  const isAuthenticated = () => {
    requestAllCustomers(token)
      .then((response) => {
        setCheckToken(true);
      })
      .catch((_error) => {
        setCheckToken(false);
      });
  };

  const formatDate = (date) => {
    const dateFormated = new Date(date);
    const day = dateFormated.getDate() + 1;
    const dayFormated = day < 10 ? `0${day}` : day;
    const month = dateFormated.getMonth() + 1;
    const monthFormated = month < 10 ? `0${month}` : month;
    return `${dateFormated.getFullYear()}-${monthFormated}-${dayFormated}`;
  };

  useEffect(() => {
    requestGetAllVehicles().then((response) => {
      setVehicles(response);
    });
  }, []);

  const context = {
    isAuthenticated,
    checkToken,
    isLoading,
    setIsLoading,
    search,
    setSearch,
    statusError,
    setStatusError,
    message,
    setMessage,
    denyEdition,
    setDenyEdtion,
    initialCustomer,
    formatDate,
    vehicles,
    setVehicles,
    customer,
    setCustomer,
    customers,
    setCustomers,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

export default Provider;
