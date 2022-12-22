import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const db = getFirestore();
  const refProps = [db, "items"];
  const ref = collection(...refProps);

  useEffect(() => {
    if (category) {
      const q = query(ref, where("category", "==", category));
      getDocs(q).then((result) =>
        setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    } else {
      // If we need get all items
      getDocs(ref).then((result) =>
      setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
