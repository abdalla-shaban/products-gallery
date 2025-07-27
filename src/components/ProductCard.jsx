import { IoCart } from "react-icons/io5";
import { TbPercentage } from "react-icons/tb";
import { Link } from "react-router";
import { useCart } from "../context/Cart/hook";
import { motion } from "motion/react";

const ProductCard = ({
  id,
  image,
  title,
  description,
  price,
  brand,
  model,
  color,
  category,
  discount,
}) => {
  const { cart, addToCart } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={
        "p-5 pt-8 group size-full transition-all duration-500 hover:shadow-main-light/20 flex flex-col gap-4 relative dark:bg-semi-main-dark bg-white shadow rounded-xl overflow-hidden"
      }
    >
      <Link
        to={`/products/${id}`}
        className="flex-1 flex flex-col space-y-1.5 "
      >
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="transition-transform duration-300 scale-95 group-hover:scale-105"
          />
        </div>
        <h3 className="text-lg md:text-xl font-medium truncate max-w-full">
          {title}
        </h3>
        <p className="truncate ">{description}</p>
        <p className="font-bold">${price}</p>
      </Link>
      {discount ? (
        <span className="absolute end-0 top-0 rounded-b-sm rounded-s-sm flex items-center  justify-center p-2 px-4  text-white bg-[#93100F]">
          <span className="text-sm font-bold">{discount} OFF</span>
          <TbPercentage size={16} />
        </span>
      ) : null}
      {cart.find((product) => product.id === id) ? (
        <Link
          to={"/cart"}
          className="p-3 flex justify-center items-center gap-2 w-full rounded-lg bg-[#93100F] text-white"
        >
          Go to Cart
          <IoCart size={24} />
        </Link>
      ) : (
        <button
          onClick={() =>
            addToCart({
              id,
              image,
              title,
              description,
              price,
              brand,
              model,
              color,
              category,
              discount,
            })
          }
          className="p-3 flex justify-center items-center gap-2 w-full rounded-lg bg-main-dark text-white"
        >
          Add to Cart
          <IoCart size={24} />
        </button>
      )}
    </motion.div>
  );
};

export default ProductCard;
