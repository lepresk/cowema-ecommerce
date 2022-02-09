import React from "react";
import "./inputStyle.css";

export default function Input({ ...props }) {
  return (
    <input
      className="text-sm block w-full pl-2 border-black border rounded-md mx-auto py-3 mb-6 hover:border-green-500 hover:border-l hover:border-r hover:border-b active:bg-green-100 focus:outline-none focus:ring-1 focus:ring-green-300 focus:border-green-300"
      {...props}
    />
  );
}
