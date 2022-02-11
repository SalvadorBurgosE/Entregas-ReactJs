import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
// import ItemCount from './components/ItemCount';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className='main'>
        <ItemListContainer/>
      </main>
    </>
  );
}

export default App;
