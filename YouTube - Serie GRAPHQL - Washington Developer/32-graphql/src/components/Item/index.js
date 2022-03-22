import React from "react";
import { useContatosContext } from "../../context/ContatosContext";
import { GET_CONTATOS } from "../../graphql";

export default function Item({ item }) {
  const { contatos, form } = useContatosContext();
  return (
    <div className="item">
      <h5 className="item-header">
        <a href="name" className="item-title" onClick={e => {
          e.preventDefault();
          form.handleUpdate(item);
        }}>
          {item.nome}
        </a>
        <button
          type="button"
          className="close"
          onClick={() =>
            contatos.deletarContato({
              variables: { id: item.id },
              refetchQueries: [{ query: GET_CONTATOS }],
            })
          }
        >
          <span>&times;</span>
        </button>
      </h5>
      <div className="item-body">
        <p className="item-text">{item.email}</p>
        <p className="item-text">{item.telefone}</p>
      </div>
    </div>
  );
}
