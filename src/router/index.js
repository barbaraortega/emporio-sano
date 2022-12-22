import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartView from "../views/Cart";
import CategoryView from "../views/Category";
import ItemView from "../views/Item";
import CheckoutView from "../views/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:category",
    element: <CategoryView />,
  },
  {
    path: "/item/:id",
    element: <ItemView />,
  },
  {
    path: "/cart",
    element: <CartView />,
  },
  {
    path: "/checkout",
    element: <CheckoutView />,
  },
]);
