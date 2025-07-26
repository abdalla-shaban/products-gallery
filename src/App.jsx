import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const Home = lazy(() => import("./pages/Home"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Loading = lazy(() => import("./components/Loading"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />,
          </Suspense>
        ),
      },
      {
        path: "/:productId",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />,
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
