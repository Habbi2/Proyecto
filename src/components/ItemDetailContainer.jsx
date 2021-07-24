import {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import tetris from '../img/tetris.png'
import roguelike from '../img/roguelike.png'
import infiniteRunner from '../img/infinite-runner.png'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [itemDetails,
        setItemDetails] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const details = [
            {
                id: "1",
                title: "Tetris",
                price: "150$",
                description: "A simple Tetris",
                text: "Tetris, video game created by Russian designer Alexey Pajitnov in 1985 that allo" +
                        "ws players to rotate falling blocks strategically to clear levels. ... The goal " +
                        "of the game is to prevent the blocks from stacking up to the top of the screen f" +
                        "or as long as possible.",
                pictureUrl: tetris,
                stock: 3
            }, {
                id: "2",
                title: "Roguelike",
                price: "200$",
                description: "A simple Roguelike",
                text: "Roguelike (or rogue-like) is a subgenre of role-playing video games characterize" +
                        "d by a dungeon crawl through procedurally generated levels, turn-based gameplay," +
                        " grid-based movement, and permanent death of the player character.",
                pictureUrl: roguelike,
                stock: 5
            }, {
                id: "3",
                title: "Infinite-Runner",
                price: "100$",
                description: "A simple Infinite-Runner",
                text: "A style of platform game in which the player character runs non-stop through a h" +
                        "azardous course, and must be guided to jump, duck, etc. to avoid the hazards.",
                pictureUrl: infiniteRunner,
                stock: 7
            }
        ];

        const getItems = () => {
            return new Promise((res, rej) => {
                let status = 200;
                if (status === 200) {
                    setTimeout(() => {
                        res(details.filter(i => i.id === id));
                        console.log(id)
                    }, 2000);
                } else {
                    rej("Rechazado");
                }
            });
        };

        getItems().then((d) => setItemDetails(d)).catch(err => {
            console.log('Error')
        });
    }, [id]);
    return (<ItemDetail details={itemDetails}/>)
};

export default ItemDetailContainer;