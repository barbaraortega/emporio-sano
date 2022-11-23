import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
