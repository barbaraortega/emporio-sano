import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(cartContext);
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;

  const navigate = useNavigate();

  function handleCuenta(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAgregar() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  return (
    <div className="card">
      {item && item.id && (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={item.img} alt={item.name} style={{ maxWidth: 300 }} />
            </div>

            <div className="col-6">
              <div className="col-12">
                <ul>
                  <li>
                    <strong>Name:</strong> {item.name}
                  </li>
                  <li>
                    <strong>Category:</strong> {item.category}
                  </li>
                  <li>
                    <strong>Description:</strong> {item.description}
                  </li>
                  <li>
                    <strong>Price:</strong> {item.price}
                  </li>
                  {currentStock > 0 && (
                    <li>
                      <strong>Stock:</strong> {item.stock}
                    </li>
                  )}
                </ul>
              </div>
              <div className="col-12">
                {currentStock > 0 ? (
                  <ItemCount count={count} handleCuenta={handleCuenta} />
                ) : (
                  <span>Sin stock</span>
                )}
                <div>
                  <button className="btn btn-success m-3" onClick={handleAgregar} disabled={currentStock === 0}>
                    Agregar al carrito
                  </button>
                  <button className="btn btn-success"
                    disabled={!isInCart(item.id)}
                    onClick={handleCheckout}
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
