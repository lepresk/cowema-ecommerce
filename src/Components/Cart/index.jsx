import { useRef, useState, useEffect } from "react"
import useCart from "../../hook/useCart"

import './style.css'

export default function Cart() {

  const { totalQty, products: cartItems, increment, decrement, remove, open, toggleOpen } = useCart()

  const cartRef = useRef()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (open) {
      const { height } = cartRef.current.getBoundingClientRect()
      setHeight(height)
    } else {
      setHeight(0)
    }
  }, [cartItems, open])

  return (
    <div className="fixed w-[350px] shadow-lg bottom-0 right-0 mr-4">
      <div onClick={toggleOpen} className="bg-blue-500 flex justify-center items-center shadow-md cursor-pointer rounded-tl-md rounded-tr-md text-white py-2 text-center">
        Panier
        {totalQty > 0 && (<span className="ml-2 rounded-full bg-yellow-500 text-xs font-medium w-5 h-5 flex items-center justify-center">{totalQty}</span>)}
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        <div className={`bg-white cart ${open ? 'cart-open' : 'card-closed'}`} style={{ height: height + 'px' }}>
          <div className="p-3 space-y-3" ref={cartRef}>
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex w-full">
                <img src={item.product.thumb.url} alt="" className="w-[60px] h-[60px] rounded-md object-cover" />
                <div className="ml-2 flex flex-col flex-auto">
                  <span className="text-sm font-medium">{item.product.name}</span>
                  <span className="text-blue-400 text-xs">{item.product.price} XAF</span>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div onClick={() => decrement(item.product)} className="bg-gray-300 h-5 w-5 flex items-end justify-center cursor-pointer font-medium rounded-full">-</div>
                      <span className="mx-2 block">{item.qty}</span>
                      <div onClick={() => increment(item.product)} className="bg-gray-300 h-5 w-5 flex items-end justify-center cursor-pointer font-medium rounded-full">+</div>
                    </div>

                    <div onClick={() => remove(item.product)} className="bg-red-500 text-white h-5 px-2 font-medium rounded-md cursor-pointer flex items-center justify-center text-xs">Retirer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}