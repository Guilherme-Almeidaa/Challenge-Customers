import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  requestCustomerById,
  requestDeleteCustomer,
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
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    setDenyEdtion(false);
    setMessage("");
    requestCustomerById(id).then((response) => {
      setCustomer(response);
      setIsLoading(false);
    });
  }, [id, setCustomer, setDenyEdtion, setMessage, setIsLoading]);

  const deleteCustomer = () => {
    const responseUser = window.confirm(
      "Tem certeza que deseja exluir o cliente?"
    );
    if (responseUser) {
      requestDeleteCustomer(id).then((_response) => {
        window.alert("Cliente Excluído");
        history.push("/");
      });
    }
  };
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
        <Form
          handlerSubmit={handlerSubmit}
          match={match}
          deleteCustomer={deleteCustomer}
        />
      )}
    </section>
  );
}

export default PageEditCustomer;
