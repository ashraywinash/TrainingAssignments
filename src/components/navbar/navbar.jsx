import React from "react";

const Navbar = () => {
  return (
    <div className="container bg-purple-800 p-3 max-w-full font-mono">
      <ul className="flex justify-between items-center">
        <li>
          <a href="https://google.com" className="text-white hover:text-zinc-900" target="blank_">
            Home
          </a>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search"
            className="p-4 outline-none rounded-full sticky"
          />
        </li>
        <li className="text-white cursor-pointer">Careers</li>
        <li className="text-white cursor-pointer">About</li>
        <li className="text-white cursor-pointer">Contact Us</li>
      </ul>
    </div>
  );
};

export default Navbar;
