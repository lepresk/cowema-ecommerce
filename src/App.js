/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
  return (
    <div className="bg-gray-50 w-full h-full">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Bienvenu sur le site Cowema</span>
          <span className="block text-2xl text-green-500">Achetez en toute simplicité.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
