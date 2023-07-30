import './App.css';
import Navbar from "./Component/Navbar";
import Collection from "./Component/Collection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from './Component/Shop';
import { useState } from 'react';
import Footer from './Component/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const addCart = (product) => {
    let present = false;
    cart.forEach((prd) => {
      if (prd.id === product.id){
        present = true;
        alert("Item already selected")
    }
    })
    if (present) {
      return;
    }
    setCart([...cart, product])
    console.log(cart)
  }
  const handleQuantity = (item, sign) => {
    let ind = -1
    cart.forEach((obj, index) => {
      if (obj.id === item.id) {
        ind = index
      }
    })
    const temp=cart;
    temp[ind].amount += sign
    if(temp[ind].amount===0){
      temp[ind].amount=1
    }
    setCart([...temp])
  }

  return (
    <>

      <BrowserRouter>
        <Navbar size={cart.length} />
        <Routes>
          <Route excat path="/cart" element={<Collection bag={cart} setCart={setCart} handleQuantity={handleQuantity} />} />
          <Route excat path="/" element={<Shop addCart={addCart} />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
