import { ShoppingBagIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import useCart from "../hook/useCart"

export default function Navbar() {

  const { totalQty, toggleOpen } = useCart()
  return (
    <div className="bg-blue-500 w-full shadow fixed top-0 left-0 right-0 z-50">
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl uppercase">Cowema</h1>

        <div className="flex">
          <div onClick={toggleOpen} className="flex items-center text-white hover:bg-blue-700 py-4 px-4 cursor-pointer transition-colors duration-300">
            <ShoppingBagIcon className="h-6 w-6 " />
            {totalQty > 0 && (<span className="ml-2 rounded-full bg-red-500 text-xs font-medium w-5 h-5 flex items-center justify-center">{totalQty}</span>)}
          </div>

          <Link to="/connexion" className="flex items-center text-white hover:bg-blue-700 py-4 px-4 cursor-pointer transition-colors duration-300">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  )
}