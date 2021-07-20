import React, { useContext, useEffect } from "react";
import context from "../../Provider/context";
import Form from "../../components/Form";
import { requestCustomerById } from "../../api/customersApi";
import Loading from "../../components/Loading";
import Header from "../../components/Header";

function PageViewCustomer({ match }) {
  const id = match.params.id;
  const { setCustomer, setDenyEdtion, isLoading, setIsLoading } =
    useContext(context);

  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoading(true);
    setDenyEdtion(true);
    requestCustomerById(id, token).then((response) => {
      setCustomer(response);
      setIsLoading(false);
    });
  }, [id, setCustomer, setDenyEdtion, setIsLoading, token]);
  return (
    <div>
      <Header />
      <section>{isLoading ? <Loading /> : <Form />}</section>
    </div>
  );
}

export default PageViewCustomer;
