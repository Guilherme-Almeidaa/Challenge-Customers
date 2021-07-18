import React, { useContext, useEffect } from "react";

import {
  requestCustomerById,
  requestUpdateCustomer,
} from "../../api/customersApi";
import Form from "../../components/Form";
import Loading from "../../components/Loading";
import context from "../../Provider/context";

function PageEditCustomer({ match }) {
  const id = match.params.id;
  const {
    setDenyEdtion,
    setCustomer,
    customer,
    setMessage,
    setStatusError,
    isLoading,
    setIsLoading,
  } = useContext(context);

  useEffect(() => {
    setIsLoading(true);
    setDenyEdtion(false);
    setMessage("");
    requestCustomerById(id).then((response) => {
      setCustomer(response);
      setIsLoading(false);
    });
  }, [id, setCustomer, setDenyEdtion, setMessage, setIsLoading]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const vehicles = customer.vehicle.map((item) => item.id);

    requestUpdateCustomer({ ...customer, vehiclesId: vehicles }, id)
      .then((_response) => {
        setMessage("Cliente Atualizado com sucesso");
        setStatusError(false);
      })
      .catch((_error) => {
        setStatusError(true);
        setMessage("Ops algo deu errado");
      });
  };

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <Form handlerSubmit={handlerSubmit} match={match} />
      )}
    </section>
  );
}

export default PageEditCustomer;
