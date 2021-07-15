import ItemCount from "./ItemCount";

const Item = ({item}) => {
    return (
        <li id="list-item" key={item.id} className="col-3">
            <div className="img-container">
                <img alt="" src={item.pictureUrl} className="image"></img>
            </div>
            <div className="word-container">
                <h1 className="list-word">{item.title}</h1>
                <h4 className="list-word">{item.price}</h4>
            </div>
            <ItemCount initial={1} maxStock={5}/>
        </li>
    );
}

export default Item;