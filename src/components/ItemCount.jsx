import { useState } from 'react'

function ItemCount({ stock, initial, maxStock, onAdd, onDecrease }) {
    const [count, setCount] = useState(0);

    initial = 0;
    maxStock = 5;

    onAdd = () => {
        if (count < maxStock) setCount(p => p+1)
    };

    onDecrease = () => {
        if (count > initial) setCount(p => p-1)
    };

    return(
        <div className='itemcount'>
            <label className="button">
                <button className="sbutton" onClick={onDecrease}>-</button>
                <h5>{count}</h5>
                <button className="sbutton" onClick={onAdd}>+</button>
            </label>
            <label className="add">Add to Cart</label>
        </div>
    );
};

export default ItemCount;