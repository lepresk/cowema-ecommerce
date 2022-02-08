import React, { useState } from "react";
import "./login.css";
import Input from "../Input/Input";
import Bouton from "../Bouton/Bouton";

const Login = () => {
  const [form, setForm] = useState(false);
  return (
    <div>
      <div className="box box1 border-solid shadow-xl rounded-md mx-auto h-auto mt-16 ">
        <div className="container w-96 mx-auto">
          <p className="text-center text-xl text-green-500 pt-8">Connexion</p>
          <p className="text-center text-sm mb-10">
            Bon retour parmis nous, connectez-vous pour ne rien rater sur cowema
          </p>
          <div className="grid grid-cols-2 gap-8">
            <button className="col-span-1 bg-green-500 hover:bg-green-600 h-2 hover:border-b hover:border-l hover:border-r hover:rounded-md  focus:outline-none focus:bg-blue-300 ..."  onClick={()=>setForm(false)} ></button>
            <button className="col-span-1 bg-green-500 hover:bg-green-600 h-2 hover:border-b hover:border-l hover:border-r hover:rounded-md  focus:outline-none focus:bg-blue-300 ..." onClick={()=>setForm(true)}></button>
          </div>

          <div className="grid grid-cols-2 mb-6 gap-8">
            <div className="col-span-1 text-green-500 h-2">TELEPHONE</div>
            <div className="col-span-1 text-green-500 h-2">E-MAIL</div>
          </div>

          {form && <Input placeholder="E-mail" type="text" /> }
          {!form && <Input placeholder="Numero de téléphone" type="text" /> }

          <Input placeholder="Mot de passe" type="text" />
          <Bouton valuer="CONNEXION" />
          <div className="grid grid-cols-2 gap-2">
            <button className="container  mb-4 col-span-1 text-xs text-center rounded-md border border-gray-200 py-1 pl-2  hover:bg-white hover:border-b hover:l hover:r hover:border-green-500">
              <div className="grid grid-cols-7 py-3">
                <p className="col-span-1 text-sm">{/* <FaFacebook /> */}</p>
                <p className="col-span-6 text-sm">S'incrire avec Facebook</p>
              </div>
            </button>

            <button className="container  mb-4 col-span-1 text-xs text-center rounded-md border  border-gray-200 py-1 pl-2 hover:bg-white hover:border-b hover:l hover:r hover:border-green-500">
              <div className="grid grid-cols-7 py-3">
                <p className="col-span-1 text-sm">{/* <FaGoogle /> */}</p>
                <p className="col-span-6 text-sm">S'incrire avec Google</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
