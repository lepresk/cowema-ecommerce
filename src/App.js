import "./App.css";
import Panier from "./Components/Produits/Panier";
import { useState } from "react";
import Liste from "./Components/Produits/Liste";
import Navbar from "./Components/Produits/Navbar";
import {Link} from "react-router-dom"

function App() {
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

    if (arr[ind].amount === 0) arr[ind].amount = 1;

    setCart([...arr]);
  };
  return (
    <div className="bg-gray-50 w-full h-full">
      <div className="w-9/12 mx-auto">
        <div className="max-w-7xl mx-auto py-12 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bienvenu sur le site Cowema</span>
            <span className="block text-2xl text-green-500">
              Achetez en toute simplicité.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
            <Link to={"/connexion"}>

              <a
                href="#!"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Se connecter
              </a>
            </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Navbar setShow={setShow} size={cart.length} />
          {show ? (
            <Liste handClick={handClick} />
          ) : (
            <Panier cart={cart} setcart={setCart} handleChange={handleChange} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
