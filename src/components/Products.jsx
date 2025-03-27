

import React from "react";
import ProductsData from "./ProductsData";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProductsData.map((item, i) => (
          <Link
            to={`/product/${item.slug}`}
            key={i}
            className="block bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <ul className="space-y-2">
              <li className="text-lg font-semibold text-gray-700">
                Name: <span className="font-normal">{item.name}</span>
              </li>
              <li className="text-lg font-semibold text-gray-700">
                Vendor: <span className="font-normal">{item.vendor}</span>
              </li>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
