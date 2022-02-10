import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);

    const increase = () => {

        if (count < props.maxStock) {
            setCount(count + 1)
        }
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }   
    }

    // const onAdd = () => {
    //     alert(`Agregaste ${count} item/s al carrito`)
    //     setCount(props.initial)
    // }

    return (
        <>
        <section className="d-flex d-row">
            <div className="d-flex d-row">
              <button className="rounded-3 mx-3 btn-primary" onClick={increase}>+</button>
              <p>{count}</p>
              <button className="rounded-3 mx-3 btn-primary" onClick={decrease}>-</button>  
            </div>
            <div>
                <button className="rounded-3 mx-3 btn-primary" onClick={()=>props.onAdd(count)}>Agregar al carrito</button>
            </div>
        </section>
        </>
    );
}

export default ItemCount;