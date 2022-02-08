import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Details() {
  const [filterData, setFilterData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/v2/products/" + id)
      .then((response) => response.json())
      .then(({ result }) => setFilterData(result));
  }, []);

  return (
    <div className="bg-white" key={filterData.id}>
      <div className="mt-14 mb-8 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-20 p-2">
        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <p className=" text-4xl font-extrabold">{filterData.name}</p>
          <div className="grid grid-cols-5">
            <div className=" col-span-1 text-xl mt-2 lg:border-r lg:border-gray-500 ">
              {filterData.price} XFA
            </div>
            <div className=" col-span-4 text-xl mt-2 ml-4 ">Nombre de vue</div>
          </div>
          <div className="mt-4 text-gray-500 text-justify ">
            Description du produit Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nam assumenda mollitia laborum veritatis
            voluptatibus rem, minima sunt facere placeat vero. Fugit amet ullam
            modi incidunt vitae. Ratione consequuntur porro accusamus?Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Mollitia enim
            optio et sequi fugit. Eveniet tempore ex quisquam magni quia soluta
            sapiente, eum atque iure dolor impedit deserunt minus voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            fuga vel harum ab eligendi nemo praesentium! Tempore incidunt nisi
            adipisci similique ut! Voluptatibus voluptas recusandae, repellendus
            perferendis accusamus eos aperiam.
          </div>
          <div className="grid grid-cols-3 gap-x-4 m-2">
            <button
              type="submit"
              className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              col-span-2
              "
            >
              Ajouter au panier
            </button>
            <button
              type="submit"
              className="mt-10 w-full bg-indigo-100 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200"
            >
              Retour
            </button>
          </div>
        </div>
        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-h-4">
          <div className="sm:rounded-lg bg-gray-200 h-1/2 ">
            <img
              src={filterData.url}
              alt=""
              className="w-full h-full object-center object-cover rounded-xl"
            />
          </div>

          <div className="grid grid-cols-3 mt-4 gap-4 h-30">
            <div className="col-span-1 sm:rounded-lg bg-green-300 h-40 ">
              <img
                src={filterData.url}
                alt=""
                className="w-full h-full object-center object-cover rounded-xl"
              />
            </div>
            <div className="col-span-1 sm:rounded-lg bg-yellow-300 rounded-xl h-40  ">
              {" "}
              <img
                src=""
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="col-span-1 sm:rounded-lg bg-red-300 h-40 ">
              {" "}
              <img
                src=""
                alt=""
                className="w-full h-full object-center object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
