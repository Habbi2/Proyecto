import Item from "./Item";

const ItemList = ({list}) => {
    return (
        <div className="container-fluid">
            <ul class="row">
                {list.map(i => <Item key={i.id} item={i}/>)}
            </ul>
        </div>
    );
};

export default ItemList;