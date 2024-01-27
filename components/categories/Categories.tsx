import { links } from "@/utils/links";
import Link from "next/link";
import headphone from "../public/images/shared/desktop/image-headphones.png";
import speaker from "../public/images/shared/desktop/image-speakers.png";
import earphone from "../public/images/shared/desktop/image-earphones.png";
import Image from "next/image";

const images = [headphone, speaker, earphone];

function Categories() {
  return (
    <section className="container mb-36 grid grid-cols-3 justify-between gap-4 px-4 text-center">
      {links.slice(1).map((link, i) => (
        <div
          className="relative rounded-lg bg-gray-300 pb-6 pt-24"
          key={link.title}
        >
          <Link
            className="absolute -top-8 left-1/2 w-full -translate-x-1/2 lg:-top-10 lg:w-2/3 xl:-top-16 xl:w-auto"
            href={link.path}
          >
            <Image src={images[i]} alt={link.title} />
          </Link>
          <Link
            className="mb-4 block text-sm font-bold uppercase text-gray-800 lg:text-lg"
            href={link.path}
          >
            {link.title}
          </Link>
          <Link
            className="text-xs font-bold uppercase text-gray-900/50 transition-colors hover:text-brand-100 lg:text-sm"
            href={link.path}
          >
            Shop <span className="text-xl text-brand-100">&rsaquo;</span>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default Categories;
