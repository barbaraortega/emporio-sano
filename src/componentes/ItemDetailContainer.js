import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const db = getFirestore();
  const refProps = [db, "items"];
  const ref = doc(...refProps, id);

  useEffect(() => {
    if (id) {
      getDoc(ref)
        .then((item) => {
          console.log(item)
          if (item.exists()) {
            setProduct({ id: item.id, ...item.data() });
          }
        })
        .catch((err) => console.error({ err }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) {
    return <p> Cargando...</p>;
  }

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
