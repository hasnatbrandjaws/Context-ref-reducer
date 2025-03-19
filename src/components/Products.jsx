

import React from "react";
import ProductsData from "./ProductsData";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {ProductsData.map((item, i) => {
        return (
          <Link to={`/product/${item.slug}`} key={i}>
            <ul>
              <li>Name : {item.name}</li>
              <li>Vendor : {item.vendor}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
