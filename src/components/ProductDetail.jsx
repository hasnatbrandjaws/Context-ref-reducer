import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "./ProductsData";

const ProductDetail = () => {
  const { slug } = useParams();

  const newObject = ProductsData.find((item, i) => item.slug == slug);
  return (
    <div>
      <ul>
        <li>Name : {newObject.name}</li>
        <li>Vendor : {newObject.vendor}</li>
        <li>Price : {newObject.price}</li>
        <li>Color : {newObject.color}</li>
      </ul>
    </div>
  );
};

export default ProductDetail;
