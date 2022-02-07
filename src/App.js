import "./App.css";
// import Liste from "./Components/Produits/Liste";
import Navbar from "./Components/Produits/Navbar";

function App() {
  return (
    <div classNameName="bg-gray-50 w-full h-full">
      <Navbar/>

      <div classNameName="w-9/12 mx-auto">
        <div classNameName="max-w-7xl mx-auto py-12 lg:flex lg:items-center lg:justify-between">
          <h2 classNameName="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span classNameName="block">Bienvenu sur le site Cowema</span>
            <span classNameName="block text-2xl text-green-500">
              Achetez en toute simplicité.
            </span>
          </h2>
          <div classNameName="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div classNameName="inline-flex rounded-md shadow">
              <a
                href="#!"
                classNameName="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Commencer maintenant
              </a>
            </div>
          </div>
        </div>
        <div classNameName="w-full">
          {/* <Liste /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
