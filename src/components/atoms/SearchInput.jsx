import { CiSearch } from "react-icons/ci";
import { useProducts } from "../../context/Products/hook";

const SearchInput = () => {
  const { searchProducts, getProducts } = useProducts();
  return (
    <>
      <label htmlFor="searchInput" className="flex-1 relative">
        <span className="sr-only">Search</span>
        <input
          type="text"
          name="searchInput"
          id="searchInput"
          placeholder="Search..."
          className="p-3 w-full transition-all duration-300 hover:border-slate-500 focus:border-slate-500 outline-none pe-8 border dark:border-slate-600 border-slate-200 rounded-lg"
          onChange={(e) => {
            if (e.target.value !== "") {
              searchProducts(e.target.value);
            } else {
              getProducts();
            }
          }}
        />
        <CiSearch
          size={24}
          className="absolute top-1/2 -translate-y-1/2 end-4"
        />
      </label>
    </>
  );
};

export default SearchInput;
