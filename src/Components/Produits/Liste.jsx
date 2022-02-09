import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hook/useCart";


export default function Liste() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const { add: addToCart } = useCart()

  useEffect(() => {
    setLoading(true)

    fetch(`/api/v2/products/all?page=${page}`)
      .then((response) => response.json())
      .then(({ result }) => setProducts((oldState) => [...oldState, ...result]))
      .finally(() => {
        setLoading(false)
      })
  }, [page]);

  const onScroll = useCallback(() => {
    if (!loading) {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        setPage((old) => old + 1)
      }
    }
  }, [loading])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }

  }, [loading, onScroll])

  return (
    <div className="w-full mx-auto pt-4 pb-10">

      {products.length > 0 && (
        <div className="grid grid-cols-4 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div key={product.id}>
              <div className="rounded-lg overflow-hidden relative">
                <Link className="relative block w-full h-[230px]" to={`/details/${product.id}`}>
                  <img
                    src={product.thumb.url}
                    alt=""
                    className="w-full h-full object-cover"
            
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20"></div>
                </Link>
                <div className="absolute bottom-0 right-0 mr-5 mb-3 text-white font-bold text-lg">
                  {product.price.toLocaleString()} XAF
                </div>
              </div>
              <div className="mt-2 w-full overflow-hidden font-medium whitespace-nowrap overflow-ellipsis text-sm">
                {product.name}
              </div>
              <button
                className="bloc w-full bg-gray-200 hover:bg-gray-800 hover:text-white transition-colors duration-300 text-center rounded p-2 mt-5 text-sm font-medium"
                onClick={() => addToCart(product)}
              >
                Ajouter au panier
              </button>
            </div>
          ))}

          {loading && <h3>Chargement....</h3>}
        </div>
      )}

    </div>
  );
}
