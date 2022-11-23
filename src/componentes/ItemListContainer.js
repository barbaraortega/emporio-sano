import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

/* mock de productos */
import { item as items } from "../mocks/items.mock";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(items);
      }, 1000)
    ).then((data) => {
      if (category) {
        const categories = data.filter(
          (products) => products.category === category
        );
        setProducts(categories);
      } else {
        setProducts(data);
      }
    });
  }, [category]);

  if (products.length === 0) {
    return <p> Cargando...</p>;
  }

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
