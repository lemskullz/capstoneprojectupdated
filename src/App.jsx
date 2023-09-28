import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import NavBar from './components/Navbar';
import SingleProduct from './Pages/SingleProduct';


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/products" element={<Products token={token} />} />
        <Route path="/cart" element={<Cart token={token} />} />
        <Route path="/products/:id" element={<SingleProduct token={token} />} />
      </Routes>
    </div>
  )
}

export default App
