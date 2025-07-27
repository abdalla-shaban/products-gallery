import { lazy } from "react";
import { useProducts } from "../context/Products/hook";

const ProductsSkeleton = lazy(() => import("./ProductsSkeleton"));
const ProductCard = lazy(() => import("../components/ProductCard"));
const SearchInput = lazy(() => import("./atoms/SearchInput"));

const ProductsList = () => {
  const { products, isLoading, error } = useProducts();
  if (isLoading) {
    return <ProductsSkeleton />;
  }
  if (error) {
    return "Something Went Wrong!";
  }
  return (
    <div className="flex flex-col gap-5">
      <SearchInput />
      <div className="grid pb-10 gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
