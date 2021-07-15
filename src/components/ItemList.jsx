import Item from "./Item";

const ItemList = ({list}) => {
    return (
        <ul className="list-container">
            {list.map(i => <Item key={i.id} item={i}/>)}
        </ul>
    );
};

export default ItemList;