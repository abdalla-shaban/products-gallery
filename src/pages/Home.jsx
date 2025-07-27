import CategoriesTabs from "../components/CategoriesTabs";
import Hero from "../components/Hero";
import ProductsList from "../components/ProductsList";
import SortProducts from "../components/SortProducts";

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
