import { useContext } from "react";
import { CartContext } from "./context";

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
