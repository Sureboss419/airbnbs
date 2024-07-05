import React, { useState } from "react";
import airbnb from "../images/airbnb logo (1).png";
import search from "../images/Frame 625776.png";
import menu from "../images/menu-01.png";
import profile from "../images/Vector.png";
import Signup from "./Signup";
import Login from "./Login";
import globe from '../images/Frame (1).png'

const Navbar = () => {
  const [popUp, setPopUp] = useState(false);
   function handleToggle(){
    setPopUp(!popUp)
   }

  return (
    <div className="flex items-center p-3 border-b">
      <img src={airbnb} className="w-24 h-8 ml-9" />
      <div className="flex items-center rounded-3xl border border-gray-900 shadow-lg ml-80">
        <input
          type="text"
          id="first_name"
          className=" text-sm text-gray-900 rounded-3xl  block w-28 p-2.5 d"
          placeholder="Anywhere"
          required
        />
        |
        <input
          type="text"
          id="first_name"
          className=" text-sm text-gray-900 rounded-3xl  block w-28 p-2.5 d"
          placeholder="Any week"
          required
        />
        |
        <input
          type="text"
          id="first_name"
          className=" text-sm text-gray-900 rounded-3xl  block w-28 p-2.5 d"
          placeholder="Add guests"
          required
        />
        <img src={search} />
      </div>
      <img src={globe} className="ml-72 cursor-pointer"/>
      <div
        onClick={handleToggle}
        className="flex cursor-pointer items-center border border-spacing-1 rounded-full ml-3 p-2"
      >
        
        {popUp && (
          <div className="shadow-xl h-35 w-35 z-10 absolute bg-white mt-32 p-1">
            <h1 className="font-semibold text-sm">Sign up</h1>
            <h1 className="text-sm">Login</h1>
            <hr className="mt-2" />
            <h1 className="text-sm">Airbnb your home</h1>
            <h1 className="text-sm">Help center</h1>
          </div>
        )}
        
        <img src={menu} className="w-5 h-5" />
        <img src={profile} className="w-5 h-5 ml-3" />
      </div>
      <Signup />
      <Login />
    </div>
  );
};

export default Navbar;
