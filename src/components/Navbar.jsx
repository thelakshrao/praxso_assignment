"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full relative">
      <div className="flex items-center justify-between">
        <Image src={logo} alt="Blueberry" width={130} height={40} />

        <ul className="hidden lg:flex items-center gap-2 text-[#212952] font-medium text-[15px] pl-18">
          <li className="px-5 py-2 rounded-xl cursor-pointer flex items-center gap-1 hover:bg-[#E9EDF5] transition">
            Solutions <ChevronDown size={14} className="opacity-50" />
          </li>
          <li className="px-5 py-2 rounded-xl cursor-pointer hover:bg-[#E9EDF5] transition">
            Features
          </li>
          <li className="px-5 py-2 rounded-xl cursor-pointer hover:bg-[#E9EDF5] transition">
            Pricing
          </li>
          <li className="px-5 py-2 rounded-xl cursor-pointer flex items-center gap-1 hover:bg-[#E9EDF5] transition">
            Blog <ChevronDown size={14} className="opacity-50" />
          </li>
          <li className="px-5 py-2 rounded-xl cursor-pointer hover:bg-[#E9EDF5] transition">
            Restaurants
          </li>
          <li className="px-5 py-2 rounded-xl cursor-pointer flex items-center gap-1 hover:bg-[#E9EDF5] transition">
            Food <ChevronDown size={14} className="opacity-50" />
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-[#212952]">Sign in</button>
          <button className="bg-[#212952] text-white px-3 py-3 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition">
            Get berry <ArrowRight size={18} />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-[#212952] hover:bg-[#E9EDF5]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border rounded-2xl shadow-xl p-6 flex flex-col gap-4 text-[#212952] font-medium z-50">
          <div className="flex justify-between items-center">
            Solutions <ChevronDown size={16} />
          </div>
          <div>Features</div>
          <div>Pricing</div>
          <div className="flex justify-between items-center">
            Blog <ChevronDown size={16} />
          </div>
          <div>Restaurants</div>
          <div className="flex justify-between items-center">
            Food <ChevronDown size={16} />
          </div>

          <hr />

          <button className="text-left">Sign in</button>
          <button className="bg-[#212952] text-white px-4 py-3 rounded-full flex items-center justify-center gap-2">
            Get berry <ArrowRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
