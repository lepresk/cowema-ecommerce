import Cart from "./Components/Cart"
import Navbar from "./Components/Navbar"
import Liste from "./Components/Produits/Liste"

function Home() {

  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="bg-gray-50 w-full h-full mt-16">
        <div className="w-9/12 mx-auto">

          <div className="max-w-7xl mx-auto py-12 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Bienvenu sur le site Cowema</span>
              <span className="block text-2xl text-green-500">
                Achetez en toute simplicité.
              </span>
            </h2>
          </div>

          <Liste />

        </div>
      </div>

      <Cart />
    </div>
  )
}

export default Home