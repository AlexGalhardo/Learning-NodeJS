import React, { useEffect } from "react";

import Form from "./components/Form";
import Contatos from "./components/Contatos";
import Header from "./components/Header";

import { client } from "./config/client-graphql";
import { gql } from "@apollo/client";

import "./App.css";

function App() {
  useEffect(() => {
    initial();
  }, []);

  function initial() {
    client
      .query({
        query: gql`
          query {
            contatos {
              id
              nome
              email
              telefone
            }
          }
        `,
      })
      .then((res) => console.log(res));
  }

  return (
    <div className="container">
      <Header text="Contatos" />
      <main className="main">
        <Form />
        <Contatos />
      </main>
    </div>
  );
}

export default App;
