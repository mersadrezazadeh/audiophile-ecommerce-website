"use client";

import Image from "next/image";
import { useState } from "react";
import cart from "@/public/images/shared/desktop/icon-cart.svg";

function CartPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <Image src={cart} alt="cart" />
      </button>
    </div>
  );
}

export default CartPreview;
