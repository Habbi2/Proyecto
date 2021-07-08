const Greeting = ({greeting}) => {
    return (
        <h1 className='greeting'>{greeting}</h1>
    );
};

export default function ItemListContainer() {
    return (
        <Greeting greeting='hola'/>
    );
};