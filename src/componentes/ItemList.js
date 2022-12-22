import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="row m-4" >
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
