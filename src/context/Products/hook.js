import { useContext } from "react";
import { ProductsContext } from "./context";

export const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};
