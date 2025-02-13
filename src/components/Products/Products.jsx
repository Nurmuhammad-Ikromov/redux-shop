import React from "react";
import Product from "../Product/Product";
import { PRODUCTS } from "../../PRODUCTS";

const Products = () => {

  return <ul className="flex  justify-between mt-5 flex-wrap gap-4">
    {
      PRODUCTS.map((item) => <Product key={item.id} {...item} />)
    }
  </ul>;
};

export default Products;
