import ItemList from "./ItemList";
import {useState, useEffect} from 'react';
import tetris from '../img/tetris.png'
import roguelike from '../img/roguelike.png'
import infiniteRunner from '../img/infinite-runner.png'

export default function ItemListContainer() {
    const [itemList,
        setItemList] = useState([]);
    useEffect(() => {
        const list = [
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

        const task = new Promise((res, rej) => {
            let status = 200;
            if (status === 200) {
                setTimeout(() => {
                    res(list);
                }, 2000);
            } else {
                rej("Rechazado");
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