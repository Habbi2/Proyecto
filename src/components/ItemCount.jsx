import { useState } from 'react'

function ItemCount({ initial, maxStock, onAdd, onDecrease, onConfirm }) {
    const [stock, setCount] = useState(0);

    initial = 0;
    maxStock = 5;

    onAdd = () => {
        if (stock < maxStock) setCount(p => p+1)
    };

    onDecrease = () => {
        if (stock > initial) setCount(p => p-1)
    };

    onConfirm = () => {
        alert("You just bought " + stock + " items")
    }

    return(
        <div className='itemcount'>
            <label className="button">
                <button className="sbutton" onClick={onDecrease}>-</button>
                <h5>{stock}</h5>
                <button className="sbutton" onClick={onAdd}>+</button>
            </label>
            <label className="add">
                <button className="sbutton" onClick={onConfirm}>Add to Cart</button>
            </label>
        </div>
    );
};

export default ItemCount;