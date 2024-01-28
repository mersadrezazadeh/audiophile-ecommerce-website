"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";
import { FaBars, FaXmark } from "react-icons/fa6";

function NavLinks() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="-order-1 xl:order-none">
      <button
        className={`text-gray-100 transition-all xl:hidden  ${open ? "rotate-180" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaXmark className="size-6" /> : <FaBars className="size-6" />}
      </button>
      <nav>
        <ul
          className={`xl:bg-transparent absolute top-32 flex w-3/4 flex-col gap-16 rounded-lg bg-gray-300 bg-opacity-5 px-5 py-16 text-center text-3xl font-bold uppercase text-gray-100 backdrop-blur-md transition-all xl:static xl:flex-row xl:gap-8 xl:p-0 xl:text-base ${
            open ? "left-1/2 -translate-x-1/2" : "-left-full"
          }`}
        >
          {links.map((link) => (
            <li
              className={`transition-colors ${
                pathname === link.path
                  ? "text-brand-100"
                  : "hover:text-brand-100"
              }`}
              key={link.title}
            >
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavLinks;
