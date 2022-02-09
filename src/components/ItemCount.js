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

    return (
        <>
        <section>
            <div className="d-flex d-row">
              <button className="rounded-3 mx-3 btn-primary" onClick={increase}>+</button>
              <p>{count}</p>
              <button className="rounded-3 mx-3 btn-primary" onClick={decrease}>-</button>  
            </div>
            <div>

            </div>
        </section>
        </>
    );
}

export default ItemCount;