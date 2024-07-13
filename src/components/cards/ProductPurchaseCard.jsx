import { useContext, useState } from 'react';
import { ProductContext } from '../../contexts/product-context.jsx';
import colorVariants from '../../utils/colorVariants.js'
import clsx from 'clsx';
import { Bag2 } from 'iconsax-react';

export const ProductPurchaseCard = () => {
  const { state: productState } = useContext(ProductContext);

  const [counter, setCounter] = useState(1);

  const maxCounter = 15;

  const increase = () => counter < maxCounter && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <section className="flex flex-wrap gap-4">
      <div className="flex gap-9 rounded-full bg-zinc-100 px-6 py-3 text-lg font-bold items-center">
        <button
          onClick={decrease}
          className={clsx({
            "cursor-not-allowed text-neutral-400": counter === 1,
          })}
        >
          -
        </button>
        <p className="text-xl text-dark-blue">{counter}</p>
        <button
          onClick={increase}
          className={clsx({
            "cursor-not-allowed text-neutral-400": counter === maxCounter,
          })}
        >
          +
        </button>
      </div>
      <button
        className={clsx(
          "flex items-center gap-3 rounded-full max-w-64 justify-center w-full py-4 text-sm font-semibold",
          colorVariants[productState.color?.color]?.bg,
          colorVariants[productState.color?.color]?.text || "text-white",
        )}
      >
        <Bag2 />
        Add To Cart
      </button>
    </section>
  );
};