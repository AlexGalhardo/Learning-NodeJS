import React from "react";
import { useContatosContext } from "../../context/ContatosContext";

export default function Form() {

  const { form } = useContatosContext()

  return (
    <form onSubmit={form.handleSubmit}>
      <div className="form-group">
        <label>Nome</label>
        <input
          type="hidden"
          name="id"
          ref={form.refId}
        />
        <input
          type="text"
          name="nome"
          ref={form.refNome}
        />
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          ref={form.refEmail}
        />
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input
          type="text"
          name="telefone"
          ref={form.refTelefone}
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
