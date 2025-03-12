import React from "react";
import logo from "../../../src/assets/newloggg.d00e50814202bbb2c40b 1.png"

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white"></span>
        </a>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#" className="text-blue-700 dark:text-blue-500">Service</a></li>
          <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">Hire Indian Talent</a></li>
          <li><a href="#" className="text-gray-900 dark:text-white hover:text-blue-700">Case Study</a></li>
        </ul>
        <div className="flex space-x-3">
          <button className="text-white bg-ffffff hover:bg-blue-800 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">
          Book an Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
