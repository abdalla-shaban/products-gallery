import { useEffect, useState } from "react";
import { ProductsContext } from "./context";

export const ProductsContextPovider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCatProducts = async (cat) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://fakestoreapi.in/api/products/category?type=${cat.toLowerCase()}`
      );
      const fetchedData = await res.json();
      setError(null);
      setProducts(fetchedData.products);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const getProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.in/api/products");
      const fetchedData = await res.json();
      setError(null);
      setProducts(fetchedData.products);
      setOriginalProducts(fetchedData.products);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const sortProducts = (sortOption) => {
    const sorted = [...products].sort((a, b) => {
      if (sortOption === "lth") return a.price - b.price;
      if (sortOption === "htl") return b.price - a.price;
      if (sortOption === "name") return a.title.localeCompare(b.title);
      return 0;
    });
    setProducts(sorted);
  };

  const searchProducts = (query) => {
    const filtered = originalProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase().trim())
    );
    setProducts(filtered);
  };

  const getSingleProduct = async (productId) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://fakestoreapi.in/api/products/${productId}`
      );
      const fetchedData = await res.json();
      setError(null);
      setSingleProduct(fetchedData.product);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        singleProduct,
        getCatProducts,
        getProducts,
        sortProducts,
        searchProducts,
        getSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
