import React from 'react'

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-16 right-0 w-64 h-screen bg-gray-800 shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-white text-lg font-semibold">Sidebar</h1>
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="text-white text-xl">
          &times;
        </button>
      </div>
      <div className="p-4">
        <ul>
          <li className="text-white py-2 cursor-pointer hover:bg-gray-700 p-2">Home</li>
          <li className="text-white py-2 cursor-pointer hover:bg-gray-700 p-2">About</li>
          <li className="text-white py-2 cursor-pointer hover:bg-gray-700 p-2">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar