import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ initial, maxStock }) => {
  const [stock, setCount] = useState(initial);
  const [option, setOption] = useState(0);
  const options = [
    { value: 0, text: "Add to Cart", symbol1: "+", symbol2: "-" },
    { value: 1, text: "Finish Purchase", symbol1: "", symbol2: "" },
  ];

  const onAdd = () => {
    if (stock < maxStock) setCount((p) => p + 1);
  };

  const onDecrease = () => {
    if (stock > initial) setCount((p) => p - 1);
  };

  const onConfirm = () => {
    setOption(1);
  };

  const onReject = () => {
    setOption(0);
  };

  const ItemDetailC = ({ options }) => {
    return (
      <div className="itemcount">
        <label className="button">
          <button className="sbutton" onClick={onDecrease}>
            {options[option].symbol2}
          </button>
          {option === 0 ? (
            <h5 className="stock">{stock}</h5>
          ) : (
            <h5 className="stock" type="button" onClick={onReject}>
              Back
            </h5>
          )}
          <button className="sbutton" onClick={onAdd}>
            {options[option].symbol1}
          </button>
        </label>
        <label className="add">
          {option === 0 ? (
            <button className="sbutton-add" onClick={onConfirm}>
              {options[option].text}
            </button>
          ) : (
            <button className="sbutton-add">
              <Link to="/Cart" className="slink">
                {options[option].text}
              </Link>
            </button>
          )}
        </label>
      </div>
    );
  };

  return <ItemDetailC options={options}></ItemDetailC>;
};

export default ItemCount;
