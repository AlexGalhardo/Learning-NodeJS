import React from "react";

import Form from "./components/Form";
import Contatos from "./components/Contatos";
import Header from "./components/Header";

import { client } from "./config/client-graphql";
import { ApolloProvider } from "@apollo/client";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header text="Contatos" />
        <main className="main">
          <Form />
          <Contatos />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
