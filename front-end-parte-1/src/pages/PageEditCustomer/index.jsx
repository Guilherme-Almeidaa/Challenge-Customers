import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
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

  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoading(true);
    setDenyEdtion(false);
    setMessage("");
    requestCustomerById(id, token).then((response) => {
      setCustomer(response);
      setIsLoading(false);
    });
  }, [id, setCustomer, setDenyEdtion, setMessage, setIsLoading, token]);

  useEffect(() => {
    setMessage("");
  }, [setMessage]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const vehicles = customer.vehicle.map((item) => item.id);

    requestUpdateCustomer({ ...customer, vehiclesId: vehicles }, id, token)
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
    <div>
      <Header />
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          <Form handlerSubmit={handlerSubmit} match={match} />
        )}
      </section>
    </div>
  );
}

export default PageEditCustomer;
