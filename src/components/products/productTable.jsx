import React from "react";
import Product from "./product";

const Table = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Costo</th>
          <th scope="col">Stock</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((el) => {
          return <Product data={el} key={el.id} />;
        })}
      </tbody>
    </table>
  );
};

export default Table;
