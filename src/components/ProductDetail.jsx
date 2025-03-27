import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "./ProductsData";

const ProductDetail = () => {
  const { slug } = useParams();

  const newObject = ProductsData.find((item, i) => item.slug == slug);
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-80 mx-auto mt-10">
      <ul className="space-y-3 text-gray-700">
        <li className="text-lg font-semibold">
          Name: <span className="font-normal">{newObject.name}</span>
        </li>
        <li className="text-lg font-semibold">
          Vendor: <span className="font-normal">{newObject.vendor}</span>
        </li>
        <li className="text-lg font-semibold">
          Price: <span className="font-normal">${newObject.price}</span>
        </li>
        <li className="text-lg font-semibold">
          Color: <span className="font-normal">{newObject.color}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetail;
