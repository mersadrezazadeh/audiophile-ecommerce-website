import Link from "next/link";
import Logo from "../navbar/Logo";
import { links } from "@/utils/links";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="container relative grid items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="absolute left-4 top-0 h-1 w-28 bg-brand-100 " />
        <Logo />
        <ul className="flex gap-4 text-xs font-bold uppercase text-gray-300 lg:justify-end">
          {links.map((link) => (
            <li className="hover:text-brand-100" key={link.title}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <p className="max-w-[50ch] text-sm text-gray-300/50 lg:col-span-2">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <div className="flex items-center justify-between lg:col-span-2">
          <p className="text-xs text-gray-300/50">
            Copyright&copy; 2021. All Rights Reserved
          </p>
          <div className="flex justify-between gap-3 text-gray-300">
            <a href="/">
              <FaInstagram className="size-7 hover:text-brand-100" />
            </a>
            <a href="/">
              <FaFacebook className="size-7 hover:text-brand-100" />
            </a>
            <a href="/">
              <FaXTwitter className="size-7 hover:text-brand-100" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
