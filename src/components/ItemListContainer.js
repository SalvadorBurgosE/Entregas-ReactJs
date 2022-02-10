import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const onAdd = (count) => {
    alert("Agregaste:", count)
}

const ItemListContainer = (props) => {
    return (
        <>
        <h1 className='px-5'> {props.text} </h1>
        <ItemCount maxStock={10} initial={0} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;