import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    // const [product, setProduct] = useState([]);

    // const customFetch = (timeout, data) => {
    //     return new Promise((resolve, reject)) => {
    //         if (is_stock) {
    //             setTimeout(() => {
    //                 resolve(task)
    //             }, timeout);
    //         } else {
    //             reject("Error")
    //         }
    //     })
    // }

    return (
        <>
        <ItemList/>
        </>
    );
}

export default ItemListContainer;