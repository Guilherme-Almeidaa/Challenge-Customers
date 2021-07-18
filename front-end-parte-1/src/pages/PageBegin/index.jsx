import React, { useState, useEffect, useContext } from "react";
import context from "../../Provider/context";
import Client from "../../components/Client";
import Loading from "../../components/Loading";
import "./style.css";
import {
  requestAllCustomers,
  requestDeleteCustomer,
} from "../../api/customersApi";

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

  const deleteCustomer = (id) => {
    const responseUser = window.confirm(
      "Tem certeza que deseja exluir o cliente?"
    );
    if (responseUser) {
      requestDeleteCustomer(id).then((_response) => {
        window.alert("Cliente Excluído");
      });
    }
  };

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
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {customers.map((customer, index) => (
              <Client
                deleteCustomer={deleteCustomer}
                customer={customer}
                key={index}
              />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default PageBegin;
