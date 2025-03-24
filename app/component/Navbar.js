"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center px-5 py-4 bg-gray-900 text-white">
        <div className="logo font-mono font-bold text-lg">POCKET PLAYER</div>

        {/* Menu Icon */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faBars} className="w-6 cursor-pointer" />
        </button>
      </div>

      <hr />

      {/* Sidebar Component */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default Navbar;