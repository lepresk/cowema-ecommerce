import React, { useState, useEffect } from "react";

export default function Panier({ cart, setcart, handleChange }) {
  const handleRemove = (id) => {
    const arr = cart.filter((product) => product.id !== id);
    setcart(arr);
  };

  return (
    <div className="bg-white">
      <h1 className="font-extrabold mx-7">MON PANIER</h1>
      <div className=" mb-8 max-w-2xl mx-auto sm:px-2 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-5 lg:gap-x-20 p-2">
        <div className="hidden aspect-w-3 aspect-h-4 overflow-hidden lg:block col-span-3 border-t">
          {cart.map((product) => (
            <div className="groupe relative" key={product.id}>
              <div className="text-right mr-4 mt-4">
                <button onClick={() => handleRemove(product.id)}>X</button>
              </div>
              <div className="grid grid-cols-4 py-4 gap-4 border-b">
                <div className="">
                  <img
                    src={product.imageSrc}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
                    onClick={() => handleChange(product, -1)}
                  >
                    -
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded mx-1">
                    {product.amount}
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
                    onClick={() => handleChange(product, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-sm sm:overflow-hidden lg:aspect-h-4 col-span-2">
          <div className="mx-4">
            <p className="text-xl font-semibold mb-4">Liste des commandes</p>
            <p className="text-gray-500 text-lg border-b border-gray-300 pb-1 mt-4">
              Total achats
            </p>
            <p className="text-gray-500 text-lg border-b border-gray-300 pb-1 mt-4">
              Frais de livraison
            </p>
            <p className="text-gray-500 text-lg border-b border-gray-300 pb-1 mt-4">
              Taxes estimées
            </p>
            <p className="text-xl font-semibold pb-1 mt-4">Total</p>
            <button
              type="submit"
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            col-span-2
            "
            >
              Acheter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
