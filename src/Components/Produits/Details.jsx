import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Cart from "../Cart";
import useCart from "../../hook/useCart";

export default function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)

  const {add} = useCart()

  useEffect(() => {
    setLoading(true)
    fetch(`/api/v2/products/${id}`)
      .then((response) => response.json())
      .then(({ result }) => setProduct(result))
      .finally(() => {
        setLoading(false)
      })
  }, [id]);

  return (
    <div className="bg-gray-100 h-full w-full">

      <Navbar />

      {loading && (<h1>Chargement...</h1>)}

      {product && (
        <div className="mt-20 mb-8 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-20 p-2">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <p className=" text-4xl font-extrabold">{product.name}</p>
            <div className="grid grid-cols-5">
              <div className=" col-span-1 text-xl mt-2 lg:border-r lg:border-gray-500 ">
                {product.price} XAF
              </div>
              <div className="col-span-4 text-xl mt-2 ml-4 text-gray-400">{product.annonce_view_count} vues</div>
            </div>
            <div className="mt-4 text-gray-500 text-justify">
              {product.description}
            </div>
            <button
              type="button"
              className="mt-10 w-full bg-indigo-600 rounded-md py-3 px-8 text-base font-medium text-white hover:bg-indigo-700"
              onClick={() => add(product)}
            >
              Ajouter au panier
            </button>

          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-h-4">
            <div className="sm:rounded-lg bg-gray-200 h-[400px]">
              <img
                src={product.thumb.url}
                alt=""
                className="w-full h-full object-center object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      )}

      <Cart />
    </div>
  );
}
