import React, { useState, useEffect } from "react";

export default function Liste() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/api/v2/products/all")
      .then((response) => response.json())
      .then(({ result }) => setProducts(result));
  }, [])

  return (
    <div className="w-full mx-auto py-10">
      <div className="grid grid-cols-4 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id}>
            <div className="rounded-lg overflow-hidden relative">
              <img src={product.thumb.url} alt="" className="w-full h-[230px] object-cover" />

              <div className="absolute bottom-0 right-0 mr-5 mb-3 text-white font-bold text-lg">{product.price.toLocaleString()} XAF</div>
            </div>
            <div className="mt-2 w-full overflow-hidden font-medium whitespace-nowrap overflow-ellipsis text-sm">{product.name}</div>
            <button className="bloc w-full bg-gray-200 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-center rounded p-2 mt-5 text-sm font-medium">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}