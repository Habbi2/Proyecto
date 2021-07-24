import { useState } from "react";

const ItemCount = ({ initial, maxStock }) => {
  const [stock, setCount] = useState(initial);

  const onAdd = () => {
    if (stock < maxStock) setCount((p) => p + 1);
  };

  const onDecrease = () => {
    if (stock > initial) setCount((p) => p - 1);
  };

  const onConfirm = () => {
    //Change alert for a scss label popup
    alert("You just bought " + stock + " items");
  };

  return (
    <div className="itemcount">
      <label className="button">
        <button className="sbutton" onClick={onDecrease}>
          -
        </button>
        <h5 className="stock">{stock}</h5>
        <button className="sbutton" onClick={onAdd}>
          +
        </button>
      </label>
      <label className="add">
        <button className="sbutton-add" onClick={onConfirm}>
          Add to Cart
        </button>
      </label>
    </div>
  );
};

export default ItemCount;
