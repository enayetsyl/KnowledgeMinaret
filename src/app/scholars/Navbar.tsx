import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/constant";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
