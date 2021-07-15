import Item from "./Item";

const ItemList = ({list}) => {
    return(
        <div className="list-container">
            {list.map(i => 
            <ul key={i.id} className="list-group">
                <Item key={i.id} item={i}/>
            </ul>
            )}
        </div>
    );
};

export default ItemList;