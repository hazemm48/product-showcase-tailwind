import { Bag2 } from "iconsax-react";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between border-b-2 px-10 py-4">
      <strong className="text-3xl text-dark-blue">
        <i>Company</i>
      </strong>

      <div className="bg-light-pink relative flex h-[50px] w-[50px] items-center justify-center rounded-full">
        <Bag2 color="#875541" />
        <p className="bg-dark-blue absolute left-8 top-[-3px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-white text-xs text-white">
          3
        </p>
      </div>
    </nav>
  );
};
