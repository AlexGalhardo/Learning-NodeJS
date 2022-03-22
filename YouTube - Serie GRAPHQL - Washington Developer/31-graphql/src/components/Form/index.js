import React, { useState } from "react";
import { useContatosContext } from "../../context/ContatosContext";

const valorInicial = { nome: "", email: "", telefone: "" };

export default function Form() {
  const { contatos } = useContatosContext();
  const [inputs, setInputs] = useState(valorInicial);

  function handleSubmit(event) {
    event.preventDefault();

    contatos.criarContato({
      variables: inputs,
    });
    setInputs(valorInicial);
  }

  function handleChange(input) {
    setInputs({ ...inputs, [input.target.name]: input.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nome</label>
        <input
          type="text"
          onChange={handleChange}
          name="nome"
          value={inputs.nome}
        />
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={inputs.email}
        />
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input
          type="text"
          onChange={handleChange}
          name="telefone"
          value={inputs.telefone}
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">
          Adicionar
        </button>
      </div>
    </form>
  );
}
