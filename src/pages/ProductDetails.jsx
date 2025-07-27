import { lazy, useEffect } from "react";
import { Link, useParams } from "react-router";
import { IoCart } from "react-icons/io5";
import { TbPercentage } from "react-icons/tb";
import { useCart } from "../context/Cart/hook";
import { useProducts } from "../context/Products/hook";
const Loading = lazy(() => import("../components/Loading"));

const ProductDetails = () => {
  const { isLoading, error, getSingleProduct, singleProduct } = useProducts();
  const { productId } = useParams();
  const { cart, addToCart } = useCart();
  useEffect(() => {
    getSingleProduct(productId);
  }, [productId]);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return "Something Went Wrong!";
  }

  return (
    <div className="flex lg:flex-row flex-col dark:text-main-dark bg-white p-6 md:p-10 shadow rounded-xl gap-5 items-center">
      <div className="flex-1">
        <img src={singleProduct.image} alt={singleProduct.title} />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h1 className=" text-lg md:text-2xl lg:text-4xl font-bold">
          {singleProduct.title}
        </h1>
        <div className="flex items-center text-lg font-bold gap-2">
          <span>${singleProduct.price}</span>
          {singleProduct.discount ? (
            <>
              <span className="rounded-full flex  items-center  justify-center size-10  text-white bg-[#93100F]">
                <span className="text-sm font-bold">
                  {singleProduct.discount}
                </span>
                <TbPercentage size={16} />
              </span>
              OFF
            </>
          ) : null}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-5">
            <p className="font-medium">Brand:</p>{" "}
            <span className="uppercase">{singleProduct.brand}</span>
          </div>
          <div className="flex items-center gap-5">
            <p className="font-medium">Model:</p>{" "}
            <span className="uppercase">{singleProduct.model}</span>
          </div>
          <div className="flex items-center gap-5">
            <p className="font-medium">Color:</p>{" "}
            <span className="uppercase">{singleProduct.color}</span>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">About This Product:</h4>
          <p>{singleProduct.description}</p>
        </div>
        {cart.find((product) => product.id === singleProduct.id) ? (
          <Link
            to={"/cart"}
            className="p-3 flex justify-center items-center gap-2 w-full rounded-lg bg-red-800 text-white"
          >
            Go to Cart
            <IoCart size={24} />
          </Link>
        ) : (
          <button
            onClick={() => addToCart(singleProduct)}
            className="p-3 flex justify-center items-center gap-2 w-full rounded-lg bg-main-dark text-white"
          >
            Add to Cart
            <IoCart size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
