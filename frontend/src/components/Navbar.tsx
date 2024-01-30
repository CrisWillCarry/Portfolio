import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">My React App</div>
          <ul className="flex space-x-4">
            <li className="text-white hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">Home</li>
            <li className="text-white hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">About</li>
            <li className="text-white hover:bg-gray-700 px-2 py-1 rounded cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
