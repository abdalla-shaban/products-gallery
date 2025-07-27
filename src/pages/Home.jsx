import { lazy } from "react";
const Hero = lazy(() => import("../components/Hero"));
const CategoriesTabs = lazy(() => import("../components/CategoriesTabs"));
const ProductsList = lazy(() => import("../components/ProductsList"));
const SortProducts = lazy(() => import("../components/SortProducts"));

const Home = () => {
  return (
    <>
      <Hero />
      <div className="space-y-4 overflow-x-auto">
        <h2 className="mb-5 text-xl md:text-4xl font-bold">Products</h2>
        <div className="flex min-w-5xl mb-5 items-center gap-10 justify-between">
          <CategoriesTabs />
          <SortProducts />
        </div>
      </div>
      <ProductsList />
    </>
  );
};

export default Home;
