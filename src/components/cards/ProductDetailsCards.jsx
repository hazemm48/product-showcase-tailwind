import clsx from "clsx";
import { Bag2, Heart, Save2, Share, TickCircle, Truck } from "iconsax-react";
import { Fragment, useContext, useState } from "react";
import { ProductContext } from "../../contexts/product-context.jsx";
import colorVariants from "../../utils/colorVariants.js";
import { AlertContext } from "../../contexts/alert-context.jsx";

export const ProductNameCard = ({ name, brand, likes }) => {
  const { dispatch } = useContext(AlertContext);

  const [state, setState] = useState({
    liked: false,
    saved: false,
  });
  const onShare = () => {
    navigator.clipboard.writeText(window.location.href);
    dispatch({
      type: "SHOW_ALERT",
      payload: { text: "Product link copied to clipboard", type: "info" },
    });
  };

  const onLike = () => {
    setState({ ...state, liked: !state.liked });
    if (!state.liked) {
      dispatch({
        type: "SHOW_ALERT",
        payload: { text: "Product liked", type: "info" },
      });
    }
  };

  const onSave = () => {
    setState({ ...state, saved: !state.saved });
    if (!state.saved) {
      dispatch({
        type: "SHOW_ALERT",
        payload: { text: "Product saved", type: "info" },
      });
    }
  };
  return (
    <section className="capitalize">
      <div className="flex flex-wrap-reverse items-center justify-between gap-3">
        <p className="text-3xl font-semibold">{name}</p>
        <div className="flex gap-3">
          <button
            className="flex items-center gap-1 rounded-lg bg-rose-50 px-2 py-1 text-xs font-semibold text-red-500"
            onClick={onLike}
          >
            <Heart size={18} variant={state.liked ? "Bold" : "Outline"} />
            {state.liked ? likes + 1 : likes}
          </button>
          <button
            className="rounded-lg bg-indigo-25 p-2 text-indigo-900"
            onClick={onSave}
          >
            <Save2 size={18} variant={state.saved ? "Bold" : "Outline"} />
          </button>
          <button className="rounded-lg bg-indigo-25 p-2 text-indigo-900">
            <Share size={18} onClick={onShare} />
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
      <strong className="text-4xl text-dark-blue">${price}</strong>
      {oldPrice && <s className="text-md text-gray-400">${oldPrice}</s>}
    </section>
  );
};

export const ProductColorsCard = ({ colors = [] }) => {
  const { state: productState, dispatch } = useContext(ProductContext);

  const colorChoose = (color) =>
    dispatch({ type: "CHANGE_COLOR", payload: color });

  return (
    <section>
      <p className="mb-3 text-gray-300">Choose a Color</p>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <div
            className={clsx(
              "relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full",
              colorVariants[color.color]?.bg,
            )}
            onClick={() => colorChoose(color)}
            key={"color" + color.id}
          >
            {productState.color?.id === color.id && (
              <TickCircle
                color={colorVariants[color.color]?.text || "white"}
                size={36}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export const ProductSizesCard = ({ sizes = [], discount }) => {
  const { state: productState, dispatch } = useContext(ProductContext);
  const sizeChoose = (size) =>
    dispatch({
      type: "CHANGE_SIZE",
      payload: {
        size,
        discount: discount,
      },
    });

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

export const ProductDeliveryCard = ({ freeDelivery }) => {
  const deliveryOptions = [
    {
      icon: Truck,
      text: "Free Delivery",
      description: (
        <u className="cursor-pointer">
          Enter your Postal code for Delivery Availability
        </u>
      ),
      show: freeDelivery,
    },
    {
      icon: Bag2,
      text: "Return Delivery",
      description: (
        <>
          Free 30 days Delivery Return.{" "}
          <u className="cursor-pointer">Details</u>
        </>
      ),
      show: true,
    },
  ].filter(({ show }) => show);
  return (
    <section className="rounded-xl border border-neutral-200 p-4">
      {deliveryOptions.map(({ icon: Icon, text, description }, i) => (
        <Fragment key={"delivery" + i}>
          <div className="flex gap-3">
            <Icon color="#D75951" size={21} />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-dark-blue">{text}</p>
              <p className="text-sm text-stone-500">{description}</p>
            </div>
          </div>
          {i < deliveryOptions.length - 1 && <hr className="my-4" />}
        </Fragment>
      ))}
    </section>
  );
};
