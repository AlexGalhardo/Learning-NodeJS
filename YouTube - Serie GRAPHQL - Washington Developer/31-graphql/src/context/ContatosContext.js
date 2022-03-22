import { useMutation, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ADD_CONTATO, GET_CONTATOS, REMOVE_CONTATO } from "../graphql";

const MyContext = React.createContext();

const cacheCreate = {
  update(cache, { data }) {
    const newContatoResponse = data?.criarContato;
    const existiongContatos = cache.readQuery({ query: GET_CONTATOS });

    cache.writeQuery({
      query: GET_CONTATOS,
      data: {
        contatos: [...existiongContatos.contatos, newContatoResponse],
      },
    });
  },
};

export default function ContatosContextProvider({ children }) {
  const { data, loading } = useQuery(GET_CONTATOS);
  const [criarContato] = useMutation(ADD_CONTATO, cacheCreate);
  const [deletarContato] = useMutation(REMOVE_CONTATO);
  return (
    <MyContext.Provider
      value={{
        contatos: {
          itens: data ? data.contatos : [],
          loading,
          criarContato,
          deletarContato,
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useContatosContext() {
  return useContext(MyContext);
}
