"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";
import hamburger from "@/public/images/shared/tablet/icon-hamburger.svg";
import close from "@/public/images/shared/tablet/icon-close-menu.svg";

function NavLinks() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="-order-1 lg:order-none">
      <button className="lg:hidden" onClick={() => setOpen(!open)}>
        <Image src={open ? close : hamburger} alt="menu toggle" />
      </button>

      <ul
        className={`absolute flex flex-col gap-8 text-center font-bold uppercase text-gray-100 transition-all lg:static lg:flex-row ${
          open ? "left-1/2 -translate-x-1/2" : "-left-full"
        }`}
      >
        {links.map((link) => (
          <li
            className={`transition-colors ${
              pathname === link.path ? "text-brand-100" : "hover:text-brand-100"
            }`}
            key={link.title}
          >
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
