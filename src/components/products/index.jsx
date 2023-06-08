import React, { useState, useEffect } from "react";
import Table from "./productTable";
import ProductModal from "./productModal";
import Spinner from "../spinner/Spinner";
import ProductForm from "./ProductForm";

const ProductList = () => {
  const initialState = [[]];
  const [productListState, setProductListState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const updateProductList = async () => {
    setLoading(true);
    const url = "http://localhost:8000/api/products/";
    const res = await fetch(url);
    const data = await res.json();
    setProductListState(data);
    setLoading(false);
  };

  useEffect(() => {
    updateProductList();
  }, []);

  return (
    <div className="col-12">
      <div className="d-grid gap-2 d-md-flex justify-content-md-end m-2">
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <i className="bi bi-plus-lg"></i>
        </button>
        <button className="btn btn-primary" onClick={updateProductList}>
          <i className="bi bi-arrow-clockwise"></i>
        </button>
        <ProductModal title="Crear nuevo producto" />
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        {loading ? <Spinner /> : <Table products={productListState} />}
      </div>
    </div>
  );
};

export default ProductList;
