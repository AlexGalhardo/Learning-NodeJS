import { useMutation, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ADD_CONTATO, GET_CONTATOS } from "../graphql";

const MyContext = React.createContext();

export default function ContatosContextProvider({ children }) {
  const { data, loading } = useQuery(GET_CONTATOS);
  const [criarContato] = useMutation(ADD_CONTATO, {
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
  });
  return (
    <MyContext.Provider
      value={{
        contatos: {
          itens: data ? data.contatos : [],
          loading,
          criarContato,
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
