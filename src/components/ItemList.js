import Item from "./Item";

export const data = [
    {
        id: 1,
        name: "Camiseta Titular",
        price: 100,
        img: "https://tiendariver.vteximg.com.br/arquivos/ids/168463-500-500/GU9603_FR_Torso_Ecom.jpg?v=637572254211130000",
        alt:"Camiseta de Futbol",
        stock: 9
    },
    {
        id: 2,
        name: "Camiseta Alt.",
        price: 100,
        img: "https://tiendariver.vteximg.com.br/arquivos/ids/167238-500-500/GH4572_1.jpg?v=637505717649570000",
        alt:"Camiseta de Futbol",
        stock: 12
    },
    {
        id: 3,
        name: "Camiseta Arquero",
        price: 100,
        img: "https://tiendariver.vteximg.com.br/arquivos/ids/168740-500-500/GU9610_APP_photo_front_transparent.png?v=637780257918700000",
        alt:"Camiseta de Futbol",
        stock: 18
    },
    {
        id: 4,
        name: "Camiseta Alt. 2",
        price: 100,
        img: "https://tiendariver.vteximg.com.br/arquivos/ids/168806-500-500/GU9600_APP_photo_front_transparent.png?v=637794253445530000",
        alt:"Camiseta de Futbol",
        stock: 31
    }
];

const ItemList = ({product}) => {
    return (
        <>
            {product.map(item =>
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