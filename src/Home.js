import React from "react";
import Navbar from "./Components/Produits/Navbar";
import Liste2 from "./Components/Produits/Liste2";
import Panier from "./Components/Produits/Panier";
import { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  const handClick = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
  };

  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    console.log(arr)

    if (arr[ind].amount === 0) arr[ind].amount = 1;

    setCart([...arr]);
  };

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Liste2 handClick={handClick} />
      ) : (
        <Panier cart={cart} setcart={setCart} handleChange={handleChange} />
      )}
    </>
  );
};

export default Home;
