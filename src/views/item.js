import { Layout } from "../componentes/Layout";
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* mock de productos */
import { item as items } from "../mocks/items.mock";

const ItemView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(items);
      }, 1000)
    ).then((data) => {
      if (id) {
        const filtered = data.filter((products) => products.id === id);
        setProduct(filtered[0]);
      } else {
        setProduct(data[0]);
      }
    });
  }, [id]);

  return (
    <Layout>
      <ItemDetailContainer product={product} />
    </Layout>
  );
};

export default ItemView;
