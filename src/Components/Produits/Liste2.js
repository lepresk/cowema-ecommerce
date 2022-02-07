import React from "react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Borselino Italiano",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbbHE8tG0c3Sara01x9aKhZS4y9FHtLQZ9Q&usqp=CAU",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "5009 XFA",
    color: "Black",
  },
  {
    id: 2,
    name: "Bella del drio",
    href: "#",
    imageSrc:
      "data:image/jpeg;base64,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",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "30993 XFA",
    color: "Red",
  },
  {
    id: 3,
    name: "harley Qeen",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXyqyqLfYLoRCyeOJua7eBu53ur5eQ8TcEw&usqp=CAU",
    price: "30493 XFA",
    color: "Black",
  },
  {
    id: 4,
    name: "Dombolo Congo",
    href: "#",
    imageSrc:
      "data:image/jpeg;base64,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",
    price: "3948 XFA",
    color: "Black",
  },
];

export default function Liste2({handClick}) {
  
  return (
    <div className="container">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Liste de produits
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="groupe relative">
                <div className="containe w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handClick(product)}
                >
                  Ajouter au panier
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
