import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ product }) => {
  if (!product) {
    return <p> Cargando...</p>;
  }

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
