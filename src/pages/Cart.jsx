import { Link } from "react-router";
import { useCart } from "../context/Cart/hook";
import { IoMdReturnLeft } from "react-icons/io";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import emptyCart from "../assets/empty-cart.png"
const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartLength,
  } = useCart();
  return (
    <div className="p-5 space-y-5 ">
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
  <div className="flex md:justify-center max-md:flex-col gap-5">

     {cart.length === 0 ? 
     <>
     <div className="flex items-center flex-col text-center gap-2">
      <div>
        <img className="max-h-96 mx-auto" src={emptyCart} alt="Empty Cart" />
      </div>
      <h2>Empty Cart</h2>
      </div>
     </> :  <>
    <div className="flex-2 flex flex-col gap-5">
     {cart.map(({ id, image, title, price, color, quantity }) => {
          return  <div
              className="p-5 bg-white dark:text-main-dark shadow rounded-xl flex max-md:flex-col max-md:text-center  items-center gap-5"
              key={id}
            >
              <div className="flex-1">
                <img className="max-w-52" src={image} alt={title} />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-2xl">{title}</h2>
                <div className="flex flex-col gap-0.5">
                  <p>
                    Color: <span>{color}</span>
                  </p>
                  <p>
                    price: <span>${price}</span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <h4 className="font-bold">Qty:</h4>
                  <div className="border flex flex-1 border-gray-400  rounded-lg">
                    <button
                    className="p-2"
                      disabled={quantity === 1}
                      onClick={() => decreaseQuantity(id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="border-x text-center flex items-center justify-center flex-1 border-gray-400">{quantity}</span>
                    <button  className="p-2" onClick={() => increaseQuantity(id)}>
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

    </div>
    <div className="flex flex-1 flex-col">
      <h4>Order Summary</h4>
      <p>Total: ${cartLength}</p>
    </div>
     </>
     }
    
  </div>
    </div>
  );
};

export default Cart;
