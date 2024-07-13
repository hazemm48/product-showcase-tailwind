import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/product-context.jsx";
import colorVariants from "../../utils/colorVariants.js";
import clsx from "clsx";
import { Bag2 } from "iconsax-react";
import { CartContext } from "../../contexts/cart-context.jsx";
import productData from "../../utils/productData.js";
import { Button } from "../common/Button.jsx";

export const ProductPurchaseCard = () => {
  const { state: productState } = useContext(ProductContext);
  const { state: cartState, dispatch } = useContext(CartContext);

  const [counter, setCounter] = useState(1);

  const maxCounter = 15;

  const increase = () => counter < maxCounter && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  const addToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: productData.id,
        color: colorVariants[productState.color?.color],
        quantity: counter,
        size: productState.size?.size,
        price: productState.discountPrice,
        name: productData.name,
        img: productState.color?.img,
      },
    });
    setCounter(1);
  };

  return (
    <section className="flex flex-wrap gap-4">
      <div className="flex items-center gap-9 rounded-full bg-zinc-100 px-6 py-3 text-lg font-bold">
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
      <Button
        text="Add To Cart"
        icon={<Bag2 />}
        action={addToCart}
        className={[
          colorVariants[productState.color?.color]?.bg,
          colorVariants[productState.color?.color]?.text || "text-white",
        ]}
      />
    </section>
  );
};
