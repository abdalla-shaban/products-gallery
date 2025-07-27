import { FaChevronDown } from "react-icons/fa";
import { useProducts } from "../context/Products/hook";
const SortProducts = () => {
  const { sortProducts } = useProducts();
  return (
    <div className="flex flex-1 max-w-xs items-center gap-2 ">
      <label htmlFor="sortData" className="w-fit">
        Sort By
      </label>
      <div className="relative flex-2">
        <select
          name="sortData"
          id="sortData"
          className="appearance-none w-full *:text-main-dark p-3 outline-none border rounded-lg"
          defaultValue={"all"}
          onChange={(e) => {
            sortProducts(e.target.value.toLowerCase().trim());
          }}
        >
          <option value="all" disabled hidden>
            All
          </option>
          <option value="lth">Price: Low to High</option>
          <option value="htl">Price: High to Low</option>
          <option value="name">Name: A–Z</option>
        </select>
        <FaChevronDown className="absolute end-4 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default SortProducts;
