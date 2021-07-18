import React, { useContext, useEffect } from "react";
import context from "../../Provider/context";
import Form from "../../components/Form";
import { requestCustomerById } from "../../api/customersApi";
import Loading from "../../components/Loading";

function PageViewCustomer({ match }) {
  const id = match.params.id;
  const { setCustomer, setDenyEdtion, isLoading, setIsLoading } =
    useContext(context);

  useEffect(() => {
    setIsLoading(true);
    setDenyEdtion(true);
    requestCustomerById(id).then((response) => {
      setCustomer(response);
      setIsLoading(false);
    });
  }, [id, setCustomer, setDenyEdtion, setIsLoading]);
  return <section>{isLoading ? <Loading /> : <Form />}</section>;
}

export default PageViewCustomer;
