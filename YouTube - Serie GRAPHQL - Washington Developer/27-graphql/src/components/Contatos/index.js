import React from "react";
import Item from "../Item";

import data from "../../data";

function Contatos() {
  return (
    <div className="contatos">
      {data.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default Contatos;
