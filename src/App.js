import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path="/" element ={<ItemListContainer/>}/>
        <Route path="/category/:id" element ={<ItemListContainer/>}/>
        <Route path="/item/:id" element ={<ItemDetailContainer/>}/>
        
      </Routes>

      <Main nombre=" Ariel Lopez" edad = " 30"/>

    </BrowserRouter>
    
  );
}

export default App;
