import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../componentes/Item";
import { Layout } from "../componentes/Layout";
import { cartContext } from "../context/cartContext";

const CartView = () => {
  const navigate = useNavigate();
  const {
    productsAdded: items,
    totalAmount,
    removeItem,
  } = useContext(cartContext);

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <Layout>
      <div>
        {items.length === 0 ? (
          <div>
            <h1>No has agregado productos</h1>
            <button className="btn btn-success" onClick={() => navigate("/")}>Ir al Inicio</button>
          </div>
        ) : (
          <div>
            <div>
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div key={product.item.id}>
                    <Item
                      key={product.item.id}
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />

                    <button className="btn btn-info" onClick={() => removeItem(product.item.id)}>
                      Borrar
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <div>
                <span>
                  Total a pagar: <strong>${totalAmount.toLocaleString('es-CL')}</strong>
                </span>
                <button className="btn btn-success m-3" onClick={handleCheckOut}>Ir al Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;
