import { createContext, useEffect, useState } from "react";

export const cartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const amount = productsAdded
      .map((product) => parseInt(product.item.price) * product.quantityAdded)
      .reduce((partialSum, a) => partialSum + a, 0);
    setTotalAmount(amount);
  }, [productsAdded]);

  function addItem(item, quantity) {
    const existeEnCarro = isInCart(item.id);
    if (existeEnCarro) {
      setProductsAdded((prevState) =>
        prevState.map((productAdded) =>
          productAdded.item.id === item.id
            ? {
                ...productAdded,
                quantityAdded: productAdded.quantityAdded + quantity,
              }
            : productAdded
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ item, quantityAdded: quantity })
      );
    }
  }

  function removeItem(itemId) {
    setProductsAdded((prevState) =>
      prevState.filter((product) => product.item.id !== itemId)
    );
  }

  function clear() {
    setProductsAdded([]);
    setTotalAmount(0);
  }

  function isInCart(itemId) {
    return Boolean(productsAdded.find((product) => product.item.id === itemId));
  }

  return (
    <cartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart,
        productsAdded,
        totalAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
