import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Items/ItemDetailContainer.js';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout";
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"Todo Gamer para Gamers!"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Todo Gamer para Gamers"}/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
