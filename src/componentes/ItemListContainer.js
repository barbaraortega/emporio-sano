import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import{useParams} from "react-router-dom";
import ItemList from "./ItemList";

/* mock de productos */
import {item }  from "../mocks/items.mock";

/* import "../productos.css" */


  

const ItemListContainer =() =>{
    const {Category } =useParams ();
    const [products, setproducts] =useState([]);


    useEffect (() =>{
        new Promise((resolve) => 
        setTimeout (() => {
            resolve (item);
        }, 2000)
        ) .then ((data) => {
        if (Category) {
            const categories= data.filter(
                (products) => products.Category ===Category
            );
        setproducts (categories);
        } else {
            setproducts(data);
        }
    } );
    },[Category]);

    if (products.length === 0) {
        return <p> Cargando...</p>
    }

return (
    <div /* className="productos" */>
    <ItemList products = {products} />

    </div>
);
};

export default ItemListContainer