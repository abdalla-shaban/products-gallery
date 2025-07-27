import { Link } from "react-router";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/Products/hook";
const ProductsList = () => {
  const { products, isLoading, error } = useProducts();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return "Something Went Wrong!";
  }
  return (
    <div className="grid pb-10 gap-5 smd:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;
