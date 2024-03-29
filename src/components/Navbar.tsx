"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div
        className={cn(
          "fixed top-0 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href="/scholars">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Scholars"
            ></MenuItem>
          </Link>
          <Link href="/blog">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Blog"
            ></MenuItem>
          </Link>
          <Link href="/mystery">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Mystery"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
};

export default Navbar;
