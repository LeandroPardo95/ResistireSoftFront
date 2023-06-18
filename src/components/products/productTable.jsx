import React from "react";
import Product from "./product";
import "./table.css";

const Table = ({ products }) => {
  return (
    <div className="card">
      <div className="card-title d-flex justify-content-between align-items-center">
        <span>Productos</span>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Costo</th>
              <th scope="col">Stock</th>
              <th scope="col">Categoria</th>
              <th scope="col">Unidades</th>
              <th scope="col">Descuento</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((el) => {
              return <Product data={el} key={el.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
