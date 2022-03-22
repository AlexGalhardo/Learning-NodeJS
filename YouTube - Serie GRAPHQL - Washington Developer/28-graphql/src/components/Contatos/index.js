import React from "react";
import { gql, useQuery } from "@apollo/client";

import Item from "../Item";

const GET_CONTATOS = gql`
  query {
    contatos {
      id
      nome
      email
      telefone
    }
  }
`;

const ContainerContatos = ({ children }) => (
  <div className="contatos">{children}</div>
);

function Contatos() {
  const { loading, data } = useQuery(GET_CONTATOS);

  if (loading) return <ContainerContatos>Carregando...</ContainerContatos>;

  return (
    <ContainerContatos>
      {data.contatos.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ContainerContatos>
  );
}

export default Contatos;
