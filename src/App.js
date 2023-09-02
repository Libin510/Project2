import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Home from "./Product/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prodctpage from "./Product/Prodctpage";
import { createContext, useEffect, useState } from "react";
import Addcart from "./Product/Addcart";
import Cartpage from "./Product/Cartpage";

export const newcontext = createContext();

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [show,setShow]=useState(true);
  const [warning,setwarning] =useState(false)

  console.log(cart);

  const addtocart = (data) => {
    let ispresent =false;
    cart.forEach((product)=>{
      if (data.id === product.id)
      ispresent= true;
    })
    if (ispresent){
      setwarning(true)
      setTimeout(() => {
        setwarning(false)

        
      }, 2000);
      return ;
    }
    
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  

const handleclick = (item) => {
  if (cart.indexof(item)  !== -1)return;
  setCart([...cart, item]);
};

const handlechange = (item,d) =>{
  const ind = cart.indexof(item);
  const arr = cart;
  arr[ind].amount +=d;

  if (arr[ind].amount ===0 ) arr[ind].amount =1 ;
  setCart([...arr])
}



  return (
    <div>
      <newcontext.Provider
        value={[product, setProduct, cart, setCart, addtocart,handlechange]}
      >
        <BrowserRouter>
          <Home />
          <Routes>
            <Route path="/" element={<Prodctpage />}></Route>
            <Route path="/add/:id" element={<Addcart />}></Route>
            <Route path="/cart" element={<Cartpage />}></Route>
          </Routes>
        </BrowserRouter>
      </newcontext.Provider>

      {
        warning &&<div className="warning">
        Item is already added to your cart
      </div>
      }
    
    </div>
  );
}

export default App;
