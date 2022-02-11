import Item from "./Item";

export const data = [
    {
        id: 1,
        name: "Camiseta Titular",
        price: 100,
        img: "img/camiseta.png",
        alt:"Camiseta de Futbol",
        stock: 9
    },
    {
        id: 2,
        name: "Camiseta Alt.",
        price: 100,
        img: "img/camisetados.png",
        alt:"Camiseta de Futbol",
        stock: 12
    },
    {
        id: 3,
        name: "Camiseta Arquero",
        price: 100,
        img: "img/camisetatres.png",
        alt:"Camiseta de Futbol",
        stock: 18
    },
    {
        id: 4,
        name: "Camiseta Alt. 2",
        price: 100,
        img: "img/camisetacuatro.png",
        alt:"Camiseta de Futbol",
        stock: 31
    }
];

const ItemList = () => {
    return (
        <>
            {data.map(item =>
                <Item 
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    stock={item.stock}
                    img={item.img}
                    alt={item.alt}
                />
            )}
        </>
    );
}

export default ItemList;