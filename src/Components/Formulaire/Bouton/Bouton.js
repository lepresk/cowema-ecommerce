import React from "react";
import "./boutonStyle.css";

export default function Bouton({...props}) {
  return (
    <input
      type="submit"
      className="container text-sm bg-green-500 pl-2  border-t border-l border-r rounded-md mx-auto py-3 mb-6 hover:bg-green-600 hover:text-black text-white"
      {...props}
    />
  );
}
