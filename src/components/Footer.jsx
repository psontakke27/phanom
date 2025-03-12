import React from "react";
import logo from "../../src/assets/newloggg.d00e50814202bbb2c40b 1.png"

function Footer() {
  return (
    <div>
      <hr />
      

<footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        
        <div>
        <a href="#" className="flex items-center space-x-3">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="text-2xl font-semibold dark:text-white"></span>
        </a>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">Home</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Services</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Hire Indian Talent</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Our Portfolio</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Book an Appointment</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Instagram</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Linkedin</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Pinterest</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <h3 class="mb-4">
                    <a href="#" class="hover:underline">Address:</a>
                </h3>
                <p>
                E-193, Third Floor, TDS Tower, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055 
                </p>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
            <p>Terms of Use     Privacy Policy   About Cookies  </p>


        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Copyright © 2025 <a href="https://flowbite.com/">Phanom Techno Private Ltd.</a>. All Rights Reserved.
        </span>
        
      </div>
    </div>
</footer>

    </div>
  );
}

export default Footer;
