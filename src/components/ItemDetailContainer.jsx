import {useState, useEffect} from 'react';
import tetris from '../img/tetris.png'
import roguelike from '../img/roguelike.png'
import infiniteRunner from '../img/infinite-runner.png'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [itemDetails,
        setItemDetails] = useState([]);
    useEffect(() => {
        const details = [
            {
                id: "1",
                title: "Tetris",
                price: "150$",
                description: "A simple Tetris",
                pictureUrl: tetris,
                stock: 3
            }, {
                id: "2",
                title: "Roguelike",
                price: "200$",
                description: "A simple Roguelike",
                pictureUrl: roguelike,
                stock: 5
            }, {
                id: "3",
                title: "Infinite-Runner",
                price: "100$",
                description: "A simple Infinite-Runner",
                pictureUrl: infiniteRunner,
                stock: 7
            }
        ];
        
        const getItems = () => {
            return new Promise((res, rej) => {
                let status = 200;
                if (status === 200) {
                    setTimeout(() => {
                        res(details);
                    }, 2000);
                } else {
                    rej("rechazado");
                }
            });
        };

        getItems().then((d) => setItemDetails(d)).catch(err => {
            console.log('Error')
        });
    }, []);
    return (<ItemDetail details={itemDetails}/>)
};

export default ItemDetailContainer;