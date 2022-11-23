const Item = ({ product }) => {
    return (
      <div>
        <img src={product.img} />
        <li>{product.name}</li>
      </div>
    );
  };
  
  export default Item;