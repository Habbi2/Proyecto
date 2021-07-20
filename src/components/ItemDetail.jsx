import ItemCount from "./ItemCount";

const ItemDetail = ({details}) => {
    return (
        <div className="container-fluid">
            <ul className="row">
                {details.map(d => (
                    <li id="list-item" key={d.id} className="col-3">
                        <div className="img-container">
                            <img alt="" src={d.pictureUrl} className="image"></img>
                        </div>
                        <div className="word-container">
                            <h1 className="list-word">{d.title}</h1>
                            <h4 className="list-word">{d.price}</h4>
                            <h5 className="list-word">{d.description}</h5>
                        </div>
                        <ItemCount initial={1} maxStock={d.stock}/>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ItemDetail;