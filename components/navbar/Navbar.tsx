import CartPreview from "./CartPreview";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-b-gray-300/20 bg-gray-800 py-6">
      <Logo />
      <NavLinks />
      <div className="md:hidden" />
      <div className="md:hidden" />
      <div className="md:hidden" />
      <div className="md:hidden" />
      <div className="md:hidden" />
      <CartPreview />
    </header>
  );
}

export default Navbar;
