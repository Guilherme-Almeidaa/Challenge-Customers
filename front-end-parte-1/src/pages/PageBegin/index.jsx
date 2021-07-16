import React, { useState, useEffect } from "react";
import Client from "../../components/Client";
import "./style.css";
import mock from "../../fileMock";

function PageBegin() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers(mock);
  }, []);

  return (
    <section className="main-container">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {customers.map((customer, index) => (
            <Client customer={customer} key={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default PageBegin;
