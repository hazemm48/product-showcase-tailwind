import { Bag2 } from "iconsax-react";
import { useContext, useLayoutEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context.jsx";

export const NavBar = ({ cartRef }) => {
  const { state: cartState, dispatch } = useContext(CartContext);
  const quantity = cartState.products?.length || 0;

  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between border-b-2 bg-white px-10 py-4">
      <strong className="text-3xl text-dark-blue">
        <i>Company</i>
      </strong>

      <div
        className="relative flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-light-pink"
        onClick={() => cartRef.current?.classList?.toggle("hidden")}
      >
        <Bag2 color="#875541" />
        <p className="absolute left-8 top-[-3px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-dark-blue text-xs text-white">
          {quantity}
        </p>
      </div>
    </nav>
  );
};
