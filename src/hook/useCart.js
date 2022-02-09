import { useCallback } from "react"
import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext({
  products: [],
  totalQty: 0
})

export function CartProvider({ children }) {

  const [products, setProducts] = useState([])
  const [totalQty, setTotalQty] = useState(0)

  useEffect(() => {
    const total = products.reduce((acc, item) => acc + item.qty, 0)
    setTotalQty(total)
  }, [products, setTotalQty])

  const add = (product) => {
    const index = products.findIndex((item) => item.product.id === product.id)
    if (index === -1) {
      setProducts((oldState) => [...oldState, { qty: 1, product }])
    } else {
      increment(product)
    }
  }

  const remove = (product) => {
    const newProducts = products.filter(item => item.product.id !== product.id)
    setProducts(newProducts)
  }

  const increment = (product) => {
    const index = products.findIndex(item => item.product.id === product.id)
    const newProducts = [...products]
    newProducts[index].qty++

    setProducts(newProducts)
  }

  const decrement = (product) => {
    const index = products.findIndex(item => item.product.id === product.id)
    const newProducts = [...products]
    const cartItem = newProducts[index]
    cartItem.qty--

    if (cartItem.qty < 0) {
      remove(product)
    } else {
      setProducts(newProducts)
    }
  }

  const empty = () => {
    setProducts([])
  }

  const [open, setOpen] = useState(false)

  return (
    <CartContext.Provider value={{
      products,
      totalQty,
      add,
      increment,
      decrement,
      empty,
      remove,
      open,
      setOpen
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default function useCart() {
  const { products, totalQty, add, remove, increment, decrement, empty, open, setOpen } = useContext(CartContext)

  const toggleOpen = useCallback(() => {
    setOpen((old) => !old)
  }, [setOpen])


  return {
    add,
    remove,
    increment,
    decrement,
    empty,
    products,
    totalQty,
    open,
    setOpen,
    toggleOpen
  }
}