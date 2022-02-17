import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import customFetch from './Functions';
import ItemList, { data } from './ItemList';

const ItemListContainer = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        customFetch(3000, data)
        .then((resolve) => setProduct(resolve))
        .catch((error) => console.log(error))
    }, [])
    

    return (
        <>
        <ItemList product={product}/>
        </>
    );
}

export default ItemListContainer;