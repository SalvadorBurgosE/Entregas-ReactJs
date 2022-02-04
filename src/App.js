import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer text="Item List Container"/>
      </main>
    </>
  );
}

export default App;
