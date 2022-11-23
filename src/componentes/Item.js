import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.img} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          <Link to={`/item/${product.id}`}>{product.name}</Link>
        </h5>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
