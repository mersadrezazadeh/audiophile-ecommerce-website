import Image from "next/image";
import logo from "@/public/images/shared/desktop/logo.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="Audiophile logo" width={150} height={30} />
    </Link>
  );
}

export default Logo;
