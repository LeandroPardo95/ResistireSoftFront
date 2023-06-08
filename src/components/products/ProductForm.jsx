import React from "react";

const ProductForm = () => {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Descripción"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="d-flex col-12 gap-2 mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Costo"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <input
          type="number"
          className="form-control"
          placeholder="Stock"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3">
      <select className="form-select" aria-label="Default select example">
        <option selected>Categoria</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      </div>

      <div className="mb-3 d-flex col-12 gap-2">
      <select className="form-select" aria-label="Default select example">
        <option selected>Unidad de medida</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <input
          type="number"
          className="form-control"
          placeholder="Unidades"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

      </div>
      <div className="mb-3 d-flex col-12 gap-2 justify-content-end">
        <button type="submit" className="btn btn-primary">
          Crear producto
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
