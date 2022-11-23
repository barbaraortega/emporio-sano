import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Item from "../componentes/Item";

import Category from "../views/Category";
import ItemView from "../views/item";


export const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
},
 {
    path: "/category/:category",
    element: <Category/>,
 }, 

 {
    path: "/item/:id",
    element: <ItemView/>,
 }, 


]);