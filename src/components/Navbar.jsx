import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import { ChevronDown, ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="flex items-center cursor-pointer">
        <Image src={logo} alt="Blueberry" width={130} height={40} />
      </div>

      <ul className="hidden lg:flex items-center gap-2 text-[#212952] font-medium text-[15px] pl-18">
        <li className="px-5 py-2 rounded-xl cursor-pointer flex items-center gap-1 hover:bg-[#E9EDF5] transition-colors duration-200">
          Solutions <ChevronDown size={14} className="opacity-50" />
        </li>

        <li className="px-5 py-2 rounded-xl cursor-pointer hover:bg-[#E9EDF5] transition-colors duration-200">
          Features
        </li>

        <li className="px-5 py-2 rounded-xl cursor-pointer hover:bg-[#E9EDF5] transition-colors duration-200">
          Pricing
        </li>

        <li className="px-5 py-2 rounded-xl cursor-pointer flex items-center gap-1 hover:bg-[#E9EDF5] transition-colors duration-200">
          Blog <ChevronDown size={14} className="opacity-50" />
        </li>

        <li className="px-5 py-2 rounded-xl cursor-pointer hover:bg-[#E9EDF5] transition-colors duration-200">
          Restaurants
        </li>

        <li className="px-5 py-2 rounded-xl cursor-pointer flex items-center gap-1 hover:bg-[#E9EDF5] transition-colors duration-200">
          Food <ChevronDown size={14} className="opacity-50" />
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="font-normal text-[#212952] cursor-pointer">Sign in</button>
        <button className="bg-[#212952] text-white px-3 py-3 rounded-full font-semibold text-[15px] flex items-center gap-2 hover:opacity-90 transition cursor-pointer">
          Get berry <ArrowRight size={18} />
        </button>
      </div>
    </nav>
  );


};

export default Navbar;
