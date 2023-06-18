import React, { useState, useEffect } from "react";
import Table from "./productTable";
import ProductModal from "./productModal";
import Spinner from "../spinner/Spinner";
import { useGetHook } from "../../hooks/fecthHooks";

const ProductList = () => {
  let {
    data: products,
    isPending: producstIsPending,
    error: productsError,
  } = useGetHook("http://localhost:8000/api/products/");

  return (
    <div className="col-12 p-2">
      <div className="gap-1 d-flex justify-content-end m-2 col-12">
        <ProductModal title="Crear nuevo producto" />
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        {producstIsPending ? <Spinner /> : <Table products={products} />}
      </div>
    </div>
  );
};

export default ProductList;
