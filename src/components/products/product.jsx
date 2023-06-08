import React from "react";

const Product = ({ data }) => {
  return (
    <>
      <tr>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>${data.cost}</td>
        <td>{data.stock}</td>
        <td className="">
          <button className="btn btn-primary ms-1">
            <i className="bi bi-pencil"></i>
          </button>
          <button className="btn btn-danger ms-1">
            <i className="bi bi-trash3"></i>
          </button>
          <button className="btn btn-success ms-1">
            <i className="bi bi-eye"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default Product;
