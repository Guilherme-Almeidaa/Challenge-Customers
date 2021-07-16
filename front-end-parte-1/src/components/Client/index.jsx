import React from "react";

function Client({ customer }) {
  return (
    <tr>
      <td>
        <p>Id: </p> {customer.id}
      </td>
      <td>
        <p>Nome:</p>
        {customer.name}
      </td>
      <td>
        <p>Sobrenome: </p>
        {customer.lastName}
      </td>
      <td>
        <p>Tipo: </p>
        {customer.type}
      </td>
    </tr>
  );
}

export default Client;
