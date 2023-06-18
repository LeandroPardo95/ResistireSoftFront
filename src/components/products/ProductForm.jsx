import React from "react";
import Spinner from "../spinner/Spinner";
import { useGetHook } from "../../hooks/fecthHooks";

const ProductForm = () => {
  let {
    data: categories,
    isPending: categoriesIsPending,
    error: categoriesError,
  } = useGetHook("http://localhost:8000/api/product-category/");
  let {
    data: measureUnits,
    isPending: measureUnitsIsPending,
    error: measureUnitsError,
  } = useGetHook("http://localhost:8000/api/measure-unit/");

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
          {categoriesIsPending ? (
            <option defaultValue disabled>
              Cargando...
            </option>
          ) : (
            categories.map((el) => <option value={el.id}>{el.name}</option>)
          )}
        </select>
      </div>

      <div className="mb-3 d-flex col-12 gap-2">
        <select className="form-select" aria-label="Default select example">
          {measureUnitsIsPending ? (
            <option defaultValue disabled>
              Cargando...
            </option>
          ) : (
            measureUnits.map((el) => (
              <option value={el.id}>{el.description}</option>
            ))
          )}
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
