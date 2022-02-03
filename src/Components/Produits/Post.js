import React from 'react'

const Post= ({result}) =>{
    return (
      <div className="grid grid-cols-4 gap-8 ml-8 mr-8 pb-8 ">
        {result.map((listeproduit) => (
          <div className=" liste col-span-1" key={listeproduit.id}>
            <div className="bg-gradient-to-t from-gray-400 ... bg rounded-b-lg pb-5">
              <button className="container ">
                <img src={listeproduit.thumb.url} alt="" className="mx-auto" />
              </button>
              <p className="mb-4 text-right mr-4 text-white text-sm">
                {listeproduit.price}{" "}
                <span className=" text-gray-800 ">FCFA</span>
              </p>
            </div>
            <div className="mt-4">{listeproduit.name}</div>
            <div className=" bg-gray-200 text-center rounded p-2 mt-8">
              Add to bag
            </div>
          </div>
        ))}
      </div>
    );
}
export default Post