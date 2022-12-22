import { Link } from "react-router-dom";

const Item = ({ product, cantidad }) => {
  
  return (
   
    <div className="card border-success mb-3 col-3 m-2" style={{ width: "18rem"}}>
      <img src={product.img} alt={product.name} className="card-img-top p-4" />
      <div className="card-body">
        <h5 className="card-title" >
          <Link style={{ color: "green" }} to={`/item/${product.id}`}>{product.name} </Link>
        </h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price}</p>
        <p className="card-text">
          {product.stock === 0
            ? "Sin Stock"
            : cantidad
            ? `Agregados: ${cantidad}`
            : `En Stock: ${product.stock}`}
        </p>
      </div>
    </div>
   
  );
};

export default Item;
