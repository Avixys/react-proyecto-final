import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"ÚLTIMOS INGRESOS"}/>
    </>
  );
}

export default App;
