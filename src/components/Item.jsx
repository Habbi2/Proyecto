const Item = ({item}) => {
    return (
        <li key={item.id} className="list-group-item">
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.pictureUrl}</p>
        </li>
    );
}

export default Item;