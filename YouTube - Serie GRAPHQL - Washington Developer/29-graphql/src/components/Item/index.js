import React from "react";

export default function Item({ item }) {
  return (
    <div className="item">
      <h5 className="item-header">
        <a href="name" className="item-title">
          {item.nome}
        </a>
        <button type="button" className="close">
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
