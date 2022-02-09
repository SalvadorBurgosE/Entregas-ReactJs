import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='main'>
        <ItemListContainer text="Item List Container"/>
        <ItemCount maxStock={10} initial={0}/>
      </main>
    </>
  );
}

export default App;
