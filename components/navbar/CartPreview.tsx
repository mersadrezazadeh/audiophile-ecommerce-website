"use client";

import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

function CartPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-gray-100 hover:text-brand-100"
        onClick={() => setOpen(!open)}
      >
        <FaCartShopping className="size-6" />
      </button>
      {open && (
        <div className="absolute right-0 top-20 rounded-lg bg-gray-100 p-5">
          Empty Cart
        </div>
      )}
    </div>
  );
}

export default CartPreview;
