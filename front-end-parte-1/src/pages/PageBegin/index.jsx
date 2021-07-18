import React, { useState, useEffect, useContext } from "react";
import context from "../../Provider/context";
import Client from "../../components/Client";
import Loading from "../../components/Loading";
import "./style.css";
import { requestAllCustomers } from "../../api/customersApi";

function PageBegin() {
  const { setCustomers, customers, search, isLoading, setIsLoading } =
    useContext(context);

  const [messgeError, setMessageError] = useState("");

  useEffect(() => {
    if (search.length === 0) {
      setIsLoading(true);
      requestAllCustomers()
        .then((response) => {
          setCustomers(response);
        })
        .catch((error) => {
          setMessageError(`${error.message}`);
        });
      setIsLoading(false);
    }
  }, [setCustomers, customers, search, setIsLoading]);

  return (
    <section className="main-container">
      {isLoading ? (
        <Loading />
      ) : messgeError !== "" ? (
        <h1>{messgeError}</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Tipo</th>
              <th>Detalhes</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {customers.map((customer, index) => (
              <Client customer={customer} key={index} />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default PageBegin;
