import ItemCount from "./ItemCount";

export default function ItemListContainer() {
    return (
        <ItemCount initial={1} maxStock={5}/>
    );
};