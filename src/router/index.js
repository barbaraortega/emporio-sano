import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Category from "../views/Category";
import ItemView from "../views/Item"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/category/:category",
    element: <Category />,
  },

  {
    path: "/item/:id",
    element: <ItemView />,
  },
]);
