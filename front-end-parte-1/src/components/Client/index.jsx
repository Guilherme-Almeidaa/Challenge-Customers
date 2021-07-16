import React from "react";

function Client({ customer }) {
  return (
    <tr>
      <td>
        <span>Id: </span> {customer.id}
      </td>
      <td>
        <span>Nome: </span>
        {customer.name}
      </td>
      <td>
        <span>Sobrenome: </span>
        {customer.lastName}
      </td>
      <td>
        <span>Tipo: </span>
        {customer.type}
      </td>
    </tr>
  );
}

export default Client;
