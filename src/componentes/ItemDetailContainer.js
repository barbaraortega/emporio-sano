import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

/* import { PlaceholderButton } from "react-bootstrap"; */
/* mock productos con alias */
import {item as itemMock }  from "../mocks/items.mock";


const ItemDetailContainer =() => {
  const [item, setItem] = useState (null);

useEffect (() => {
    new Promise((resolve) => setTimeout (()  => resolve(itemMock [0]), 2000))
    .then ((data) => setItem(data)   
);     
},[] );


if (!item) {
    return <p> Cargando...</p>;
}

return <ItemDetail item={item}/>;
};

export default ItemDetailContainer;




