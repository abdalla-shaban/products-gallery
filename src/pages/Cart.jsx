import { Link } from "react-router";
import { useCart } from "../context/Cart/hook";
import { IoMdReturnLeft } from "react-icons/io";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartLength,
  } = useCart();
  return (
    <div className="p-5">
      <div className="flex items-center gap-5 justify-between">
        <h1 className="font-bold text-2xl md:text-4xl">
          Shopping cart
          <span className="ms-4 text-base font-medium">
            ({cart.length}) items
          </span>
        </h1>
        <Link
          to={"/"}
          className="p-2 rounded-lg flex items-center gap-2 border border-gray-400"
        >
          <IoMdReturnLeft />
          Continue shopping
        </Link>
      </div>

      {cart.length === 0 ? (
        "Empty Cart"
      ) : (
        <>
          {cart.map(({ id, image, title, price, color, quantity }) => {
            <div
              className="p-5 bg-white dark:text-main-dark shadow rounded-xl flex items-center gap-5"
              key={id}
            >
              <div className="flex-1">
                <img src={image} alt={title} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-2xl">{title}</h2>
                <div className="flex flex-col gap-0.5">
                  <p>
                    Color: <span>{color}</span>
                  </p>
                  <p>
                    price: <span>${price * quantity}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <h4 className="font-bold">Qty:</h4>
                  <div className="border border-gray-400 p-2 rounded-lg">
                    <button
                      disabled={quantity === 1}
                      onClick={() => decreaseQuantity(id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="border-x border-gray-400">{quantity}</span>
                    <button onClick={() => increaseQuantity(id)}>
                      <FaPlus />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(id)}
                    className="flex items-center gap-0.5"
                  >
                    <FaTrashAlt />
                    Remove
                  </button>
                </div>
              </div>
            </div>;
          })}
        </>
      )}
    </div>
  );
};

export default Cart;
