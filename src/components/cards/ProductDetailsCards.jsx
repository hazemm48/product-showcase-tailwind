import clsx from "clsx";
import { Heart, Save2, Share, TickCircle } from "iconsax-react";
import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/product-context.jsx";

export const ProductNameCard = ({ name, brand, likes }) => {
  const [state, setState] = useState({
    liked: false,
    saved: false,
  });
  return (
    <section className="capitalize">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-semibold">{name}</p>
        <div className="flex gap-3">
          <button
            className="flex items-center gap-1 rounded-lg bg-rose-50 px-2 py-1 text-xs font-semibold text-red-500"
            onClick={() => setState({ ...state, liked: !state.liked })}
          >
            <Heart size={18} variant={state.liked ? "Bold" : "Outline"} />
            {state.liked ? likes + 1 : likes}
          </button>
          <button
            className="bg-indigo-25 rounded-lg p-2 text-indigo-900"
            onClick={() => setState({ ...state, saved: !state.saved })}
          >
            <Save2 size={18} variant={state.saved ? "Bold" : "Outline"} />
          </button>
          <button className="bg-indigo-25 rounded-lg p-2 text-indigo-900">
            <Share size={18} />
          </button>
        </div>
      </div>
      <p className="mt-2 text-gray-300">{brand}</p>
    </section>
  );
};

export const ProductPriceCard = ({ price, oldPrice }) => {
  return (
    <section className="flex items-center gap-4">
      <strong className="text-4xl text-dark-blue">${price?.toFixed(2)}</strong>
      {oldPrice && (
        <s className="text-md text-gray-400">${oldPrice?.toFixed(2)}</s>
      )}
    </section>
  );
};

export const ProductColorsCard = ({ colors = [] }) => {
  const { state: productState, dispatch } = useContext(ProductContext);

  const colorChoose = (color) =>
    dispatch({ type: "CHANGE_COLOR", payload: color });

  const colorVariants = {
    black: "bg-black",
    white: "bg-gradient-to-t from-gray-300",
    orange: "bg-orange-400",
    blue: "bg-sky-600",
    red: "bg-rose-700",
    indigo: "bg-indigo-700",
  };

  return (
    <section>
      <p className="mb-3 text-gray-300">Choose a Color</p>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <div
            className={clsx(
              "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full",
              colorVariants[color.color],
            )}
            onClick={() => colorChoose(color)}
            key={"color" + color.id}
          >
            {productState.color?.id === color.id && (
              <TickCircle
                color={color.color === "white" ? "black" : "white"}
                size={36}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export const ProductSizesCard = ({ sizes = [] }) => {
  const { state: productState, dispatch } = useContext(ProductContext);
  console.log("🚀 ~ ProductSizesCard ~ productState:", productState);
  const sizeChoose = (size) => dispatch({ type: "CHANGE_SIZE", payload: size });

  return (
    <section>
      <p className="mb-3 text-gray-300">Choose a Size</p>
      <div className="flex flex-wrap items-center gap-3">
        {sizes.map((size) => (
          <div
            className={clsx(
              "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1",
              {
                "bg-zinc-100 text-stone-500": size.id !== productState.size?.id,
                "bg-indigo-25 text-indigo-900":
                  size.id === productState.size?.id,
              },
            )}
            onClick={() => sizeChoose(size)}
            key={"size" + size.id}
          >
            <div
              className={clsx("h-3 w-3 rounded-full", {
                "border border-stone-500 bg-transparent":
                  size.id !== productState.size?.id,
                "border-2 border-white bg-indigo-900 outline outline-2 outline-white":
                  size.id === productState.size?.id,
              })}
            />
            <p className="text-sm font-medium capitalize">{size.size}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const PurchaseProduct = () => {
  const [counter, setCounter] = useState(1);
  return (
    <section className="flex gap-3">
      <div className="flex justify-between px-2 py-3">
        <button >-</button>
        <strong className="text-lg text-dark-blue">{counter}</strong>
        <button>+</button>
      </div>
      <div></div>
    </section>
  );
};
