const Item = ( {item} ) => {
    return (
        <ul id={item.id} className="list-group">
            <li className="list-group-item">{item.title}</li>
            <li className="list-group-item">{item.price}</li>
            <li className="list-group-item">{item.pictureUrl}</li>
        </ul>
    );
}

export default Item;