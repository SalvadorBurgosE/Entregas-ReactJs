import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const onAdd = (count) => {
    alert(`Agregaste ${count} item/s al carrito`)
}

const Item = (props) => {
    return (
        <>
            <div>
                <img src={props.img} alt= {props.alt}></img>
                <div>
                    <p> {props.key} </p>
                    <p> {props.name} </p>
                    <p> {props.price} </p>
                </div>
                <ItemCount maxStock={props.stock} initial={0} onAdd={onAdd}/>
            </div>
        </>
    );
}

export default Item;
