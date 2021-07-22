import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <li id="col-3-l" key={item.id} className="col-3">
            <div className="img-container">
                <img alt="" src={item.pictureUrl} className="image"></img>
            </div>
            <div className="word-container">
                <h1 className="list-word">{item.title}</h1>
                <h4 className="list-word">{item.price}</h4>
            </div>
            <div className="infoButton">
                <label className="add">
                    <Link to={`${item.title}/${item.id}`}>
                    <button className="sbutton-add">Info</button>
                    </Link>
                </label>
            </div>
        </li>
    );
}

export default Item;