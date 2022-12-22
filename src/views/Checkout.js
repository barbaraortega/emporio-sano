import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../componentes/Layout";
import { cartContext } from "../context/cartContext";
import {
  collection,
  doc,
  getFirestore,
  addDoc,
  updateDoc,
} from "firebase/firestore";


const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    productsAdded: items,
    clear,
    totalAmount,
  } = useContext(cartContext);
  const navigate = useNavigate();

  const handleFinalizar = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const phone = event.target[1].value;
    const email = event.target[2].value;

    setIsLoading(true);

    const total = items
      .map((product) => {
        return product.quantityAdded * product.item.price;
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    const order = {
      buyer: { name, phone, email },
      items,
      total,
    };
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((resp) => {
console.log(resp);

        const db = getFirestore();

        items.forEach((element) => {
          const itemRef = doc(db, "items", element.item.id);
          const dataToUpdate = {
            stock: element.item.stock - element.quantityAdded,
          };
          updateDoc(itemRef, dataToUpdate)
            .then(() => {
              clear();
              setIsLoading(false);

            alert("Compra finalizada"); 


              navigate("/");
            })
            .catch((err) => console.error(err));
        });
      })
      .catch((err) => console.error({ err }));
  };

  return (
    <Layout>

      <form onSubmit={handleFinalizar}>

        <div div className="form-floating mb-3 p-2">
          <input className="form-control" id="floatingInput" placeholder="Nombre Completo" required label for="floatingInput"/>
          <label for="floatingInput">Nombre Completo</label>
          </div>
          <div class="form-floating mb-3 p-2">
          <input className="form-control" id="floatingInput" placeholder="Numero de Telefono" type="number" required />
          <label for="floatingInput">Numero telefonico</label>
          </div>
          <div class="form-floating mb-3 p-2">
          <input className="form-control" id="floatingInput"placeholder="Email" type={"email"} required />
          <label for="floatingInput">E-mail</label>
        </div>
        <span>
          Total a pagar: <strong>${totalAmount}</strong>
        </span>
        <button className="btn btn-success m-3" type="submit" disabled={isLoading}>
          Finalizar
        </button>
    

      </form>
    </Layout>
  );
};

export default CartView;
