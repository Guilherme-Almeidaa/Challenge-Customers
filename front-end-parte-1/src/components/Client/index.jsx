import React from "react";

function Client({ customer }) {
  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.name}</td>
      <td>{customer.lastName}</td>
      <td>{customer.type}</td>
    </tr>
  );
}

export default Client;
