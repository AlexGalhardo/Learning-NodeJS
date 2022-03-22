import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GET_CONTATOS } from "../graphql";

const MyContext = React.createContext();

export default function ContatosContextProvider({ children }) {
  const { data, loading } = useQuery(GET_CONTATOS);
  return (
    <MyContext.Provider
      value={{
        contatos: {
          itens: data ? data.contatos : [],
          loading,
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
