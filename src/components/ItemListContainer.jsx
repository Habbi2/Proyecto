import ItemList from "./ItemList";
import {useState, useEffect} from 'react';

export default function ItemListContainer() {
    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        const list = [
            {
                id: "1",
                title: "Tetris",
                price: "150$",
                pictureUrl: "Tetris.png"
            }, {
                id: "2",
                title: "Roguelike",
                price: "200$",
                pictureUrl: "Roguelike.png"
            }, {
                id: "3",
                title: "Infinite-Runner",
                price: "100$",
                pictureUrl: "Infinite-Runner.png"
            }
        ];

        const task = new Promise((res, rej) => {
            let status = 200;
            if (status === 200) {
                setTimeout(() => {
                    res(list);
                }, 2000);
            } else {
                rej("rechazado");
            }
        });

        const getPromiseTask = () => {
            return task
        };

        getPromiseTask().then((r) => setItemList(r)).catch(err => {
            console.log('Error')
        })

    }, []);
    return <ItemList list={itemList}/>;
};