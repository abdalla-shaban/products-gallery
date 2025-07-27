import { Suspense, lazy } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import MainLayout from "./components/Layouts/MainLayout";
import { ThemeContextProvider } from "./context/Theme/ThemeContextProvider";
import { CartContextProvider } from "./context/Cart/CartContextProvider";
import { ProductsContextPovider } from "./context/Products/ProductsContextPovider";
import Cart from "./pages/Cart";

const Home = lazy(() => import("./pages/Home"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Loading = lazy(() => import("./components/Loading"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/products/:productId",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <ThemeContextProvider>
      <ProductsContextPovider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </ProductsContextPovider>
    </ThemeContextProvider>
  );
}

export default App;
