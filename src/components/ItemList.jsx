import Item from "./Item";

const ItemList = ({list}) => {
    return(
        <div>
            {list.map(i => <Item item={i}/>)}
        </div>
    );
};

export default ItemList;