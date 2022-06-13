import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Products } from "./components/Products";
import Product from "./components/Products/Product/Product";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="" element={<Home/>}/>
    </Routes>
   
  </div>;
}

export default App;
