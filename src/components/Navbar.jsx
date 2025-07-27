import { NavLink, useResolvedPath } from "react-router";
import SearchInput from "./atoms/SearchInput";
import ThemeToggler from "./atoms/ThemeToggler";
import { IoCart } from "react-icons/io5";
import { useCart } from "../context/Cart/hook";

const Navbar = () => {
  const { pathname } = useResolvedPath();
  const { cart } = useCart();
  return (
    <nav className="flex items-center p-4 gap-5 justify-between">
      <NavLink
        className="uppercase font-black text-base sm:text-xl md:text-3xl"
        to={"/"}
      >
        P-Gallery
      </NavLink>
      {!pathname.includes("/products/") ? <SearchInput /> : null}
      <NavLink to="/cart" className="relative">
        {cart.length > 0 ? (
          <span className="absolute -end-2 -top-2 size-5 text-xs font-bold rounded-full flex items-center justify-center bg-red-800 text-white">
            {cart.length}
          </span>
        ) : null}

        <IoCart size={38} />
      </NavLink>
      <ThemeToggler />
    </nav>
  );
};

export default Navbar;
