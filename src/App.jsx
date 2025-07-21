import { createHashRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppLayout from "./components/Layout/AppLayout";
import { ErrorPage } from "./components/UI/ErrorPage";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { DetailedProd } from "./components/UI/DetailedProd";
import { Cart } from "./components/UI/Cart";
import { Contact } from "./pages/Contact";

import "./App.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/fakeStore",
            element: <Home />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/products/:category",
            element: <DetailedProd />,
          },

          {
            path: "/contact",
            element: <Contact />,
          },
        ],
      },
    ],
    {
      basename: "/fakeStore",
    }
  );
  return <RouterProvider router={router} />;
};

export default App;
