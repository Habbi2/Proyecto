import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({ details }) => {
  const [count, setCount] = useState(0);
  const onAdd = (stockSelected) => {
    setCount(stockSelected);
  }

  return (
    <div id="container-details" className="container-fluid">
      <ul className="row-d">
        {details.map((d) => (
          <li key={d.id} className="col-8">
            <h1 className="list-word-d">{d.title}</h1>
            <p className="list-word-d" style={{ width: "80%" }}>
              {d.text}
            </p>
          </li>
        ))}
        {details.map((d) => (
          <li key={d.id} id="col-3-d" className="col-3">
            <div id="list-item-detail">
              <div className="img-container">
                <img alt="" src={d.pictureUrl} className="image"></img>
              </div>
              <div className="word-container">
                <h1 className="list-word">{d.title}</h1>
                <h4 className="list-word">{d.price}</h4>
                <h5 className="list-word">{d.description}</h5>
              </div>
              <ItemCount initial={1} maxStock={d.stock} onAdd={onAdd} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;
