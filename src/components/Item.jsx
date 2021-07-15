const Item = ({item}) => {
    return (
        <li key={item.id} className="list-group">
            <p className="list-group-item">{item.title}</p>
            <p className="list-group-item">{item.price}</p>
            <p className="list-group-item">{item.pictureUrl}</p>
        </li>
    );
}

export default Item;