import { useContext } from "react";
import { BsCart3 } from "react-icons/bs/";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";

const CartWidget = () => {
  const { productsAdded } = useContext(cartContext);
  const count = productsAdded.length;

  return (
    <Link to="/cart" className="relative">
      <BsCart3 style={{ fontSize: 30 }} />
      {count > 0 && <span>&nbsp;({count})</span>}
    </Link>
  );
};

export default CartWidget;
