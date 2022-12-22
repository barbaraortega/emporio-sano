export const ItemCount = ({ count, handleCuenta }) => {
  return (
    <div>
      <button onClick={() => handleCuenta("minus")}>-</button>
      <span>{count}</span>
      <button onClick={() => handleCuenta("plus")}>+</button>
    </div>
  );
};
