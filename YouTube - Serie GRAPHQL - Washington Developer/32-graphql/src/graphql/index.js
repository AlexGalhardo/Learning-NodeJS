import { gql } from "@apollo/client";

export const GET_CONTATOS = gql`
  query {
    contatos {
      id
      nome
      email
      telefone
    }
  }
`;

export const ADD_CONTATO = gql`
  mutation criarContato($nome: String, $email: String, $telefone: String) {
    criarContato(data: { nome: $nome, email: $email, telefone: $telefone }) {
      id
      nome
      email
      telefone
    }
  }
`;

export const REMOVE_CONTATO = gql`
  mutation deletarContato($id: Int) {
    deletarContato(filtro: { id: $id })
  }
`;

export const UPDATE_CONTATO = gql`
  mutation atualizarContato($id: Int!, $nome: String, $email: String, $telefone: String){
    atualizarContato(id: $id, data: {
      nome: $nome,
      email: $email,
      telefone: $telefone
    }) {
      id nome email telefone
    }
  }
`; 
