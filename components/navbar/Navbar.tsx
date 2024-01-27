import CartPreview from "./CartPreview";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="relative z-50 flex items-center justify-between border-b border-b-gray-300/20 bg-gray-800 px-4 py-8">
      <Logo />
      <NavLinks />
      <div className="xl:hidden" />
      <div className="xl:hidden" />
      <div className="xl:hidden" />
      <div className="xl:hidden" />
      <div className="xl:hidden" />
      <CartPreview />
    </header>
  );
}

export default Navbar;
