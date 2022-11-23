import logo from './logo.svg';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { Layout } from './componentes/Layout';
import "./titulo.css"



function App() {
  return (
    <div className="App">
      <h1 className='nombrePagina'> Emporio Sano y feliz</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

   
    <Layout> 
    <ItemListContainer/>
    </Layout>
    </div>
     

  );
}

export default App;
