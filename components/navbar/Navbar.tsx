import CartPreview from "./CartPreview";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="flex bg-gray-800 border-b border-b-gray-300 justify-between items-center py-6">
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
