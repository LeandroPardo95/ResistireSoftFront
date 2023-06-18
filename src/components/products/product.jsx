import React from "react";

const Product = ({ data }) => {
  return (
    <>
      <tr>
        <th scope="row">{data.id}</th>
        <td>{data.name}</td>
        <td>{data.description}</td>
        <td>${data.cost}</td>
        <td>{data.stock}</td>
        <td>{data.category}</td>
        <td>{data.units}</td>
        <td>{data.discount}</td>
        <td>
          <i className="bi bi-pencil text-primary"></i>
        </td>
        <td>
          <a href="#" className="text-danger">
            <i className="bi bi-trash3"></i>
          </a>
        </td>
        <td>
          <a href="#" className="text-success">
            <i className="bi bi-eye"></i>
          </a>
        </td>
      </tr>
    </>
  );
};

export default Product;
