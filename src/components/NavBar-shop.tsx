"use client";

import { ShoppingBag } from "lucide-react";

const NavBarShop = () => {
  return (
    <div className="ml-auto mr-3 flex items-center gap-x-4">
      <div className="flex text-white border-transparent font-semibold hover:opacity-75 items-center rounded-full bg-black px-3 py-2 transition ">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </div>
    </div>
  );
};

export default NavBarShop;
