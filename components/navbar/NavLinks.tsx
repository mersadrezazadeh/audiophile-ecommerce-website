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
    <nav className="-order-1 md:order-none">
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        <Image src={open ? close : hamburger} alt="menu toggle" />
      </button>

      <ul
        className={`flex text-gray-100 font-bold gap-8 uppercase flex-col md:flex-row absolute transition-all md:static text-center ${
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
