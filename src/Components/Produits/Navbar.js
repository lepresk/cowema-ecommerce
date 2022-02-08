import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";

export default function Navbar({ setShow, size }) {
  return (
    <>
      <nav className="bg-gray-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <span
            className="self-center text-green-600 text-lg font-semibold whitespace-nowrap dark:text-white cursor-pointer"
            onClick={() => setShow(true)}
          >
            Cowema Boutique
          </span>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li className="group -m-2 p-2 flex items-center cursor-pointer">
                <ShoppingBagIcon
                  onClick={() => setShow(false)}
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-red-700 group-hover:text-gray-800">
                  {size}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
