import CartPreview from "./CartPreview";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="relative z-50  bg-gray-800">
      <div className="container flex items-center justify-between border-b border-b-gray-300/20 px-4 py-8">
        <Logo />
        <NavLinks />
        <div className="xl:hidden" />
        <div className="xl:hidden" />
        <div className="xl:hidden" />
        <div className="xl:hidden" />
        <div className="xl:hidden" />
        <CartPreview />
      </div>
    </header>
  );
}

export default Navbar;
