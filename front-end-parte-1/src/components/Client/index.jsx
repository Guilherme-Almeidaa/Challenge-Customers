import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Client({ customer }) {
  return (
    <tr>
      <td>
        <span className="span-td">Id: </span>{" "}
        <p className="td-p">{customer.id}</p>
      </td>
      <td>
        <span className="span-td">Nome:</span>
        <p className="td-p">{customer.name}</p>
      </td>
      <td>
        <span className="span-td">Sobrenome: </span>
        <p className="td-p">{customer.lastName_corporateName}</p>
      </td>
      <td>
        <span className="span-td">Tipo: </span>
        <p className="td-p"> {customer.type}</p>
      </td>
      <td>
        <Link className="link-btn" to={`/customer/${customer.id}`}>
          {" "}
          <button className="button-details">Detalhes</button>
        </Link>
      </td>
      <td>
        <Link className="link-btn" to={`/customer/edit/${customer.id}`}>
          <button className="button-edit">Editar/Excluir</button>
        </Link>
      </td>
    </tr>
  );
}

export default Client;
