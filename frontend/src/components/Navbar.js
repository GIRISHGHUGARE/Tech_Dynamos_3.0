import React from 'react';
// import { BellIcon } from '@heroicons/react/outline';
import logo from '../assets/Safe_Zone-removebg-preview.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-lg font-bold">LifeSaves</span>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex md:space-x-8 md:ml-10">
              <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="/emergency" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Emergency
              </a>
              <a href="/learn-protect" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Learn & Protect
              </a>
              <a href="/community" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Community
              </a>
            </div>
          </div>
          {/* Notification Icon */}
          <div className="flex items-center">
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
