import { ArrowDown2, ArrowUp2, Bag2, CloseCircle } from "iconsax-react";
import { useContext, useLayoutEffect, useState } from "react";
import { CartContext } from "../../contexts/cart-context.jsx";
import { Button } from "../common/Button.jsx";
import clsx from "clsx";
import { AlertContext } from "../../contexts/alert-context.jsx";

export const CartCard = ({ cartRef }) => {
  const { state: cartState, dispatch } = useContext(CartContext);
  const { dispatch: alertDispatch } = useContext(AlertContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useLayoutEffect(() => {
    let total = 0;
    cartState.products.forEach((product) => {
      total += product.price * 1 * product.quantity;
    });
    setTotalPrice(total);
  }, [cartState]);

  const closeCart = () => cartRef.current?.classList?.toggle("hidden");

  const removeProduct = (product) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
  };

  const checkout = () => {
    dispatch({ type: "CLEAR_CART" });
    alertDispatch({
      type: "SHOW_ALERT",
      payload: { text: "Checkout Successful", type: "success" },
    });
    closeCart();
  };

  const incrementProduct = (product) => {
    if (product.quantity == 15) return;
    dispatch({ type: "INCREMENT_PRODUCT", payload: product });
  };

  const decrementProduct = (product) => {
    if (product.quantity == 1) return;
    dispatch({ type: "DECREMENT_PRODUCT", payload: product });
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <div
      className="fixed z-20 hidden size-full bg-black bg-opacity-50 px-8 py-5"
      onClick={closeCart}
      ref={cartRef}
    >
      <div
        className="ml-auto h-auto max-w-72 rounded-2xl bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseCircle
          color="#3A4980"
          className="cursor-pointer"
          onClick={closeCart}
        />
        <div className="flex flex-col gap-6">
          <p className="text-center text-2xl font-semibold text-indigo-900">
            My Cart
          </p>
          {cartState.products.length ? (
            <>
              {cartState.products.length > 1 && (
                <button
                  className="self-end text-xs font-semibold text-gray-400"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              )}
              <section className="flex max-h-48 flex-col gap-2 overflow-y-auto overflow-x-hidden p-2">
                {cartState.products.map((product, i) => (
                  <div
                    className="relative flex flex-col gap-2 rounded-xl border border-gray-300"
                    key={"product" + i}
                  >
                    <CloseCircle
                      size={26}
                      variant="Bold"
                      color="#D75951"
                      onClick={() => removeProduct(product)}
                      className="absolute right-[-10px] top-[-10px] cursor-pointer"
                    />
                    <div className="flex items-center justify-between gap-4 p-2">
                      <div className="flex items-center gap-4 capitalize">
                        <img
                          src={product.img}
                          className="h-20 w-20 rounded-lg border object-contain"
                        />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-indigo-900">
                            {product.color.label} {product.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-xs font-medium text-stone-500">
                              {product.size}
                            </p>
                            <div
                              className={clsx(
                                "flex h-3.5 w-3.5 rounded-full",
                                product.color.bg,
                              )}
                            >
                              <div className="mx-auto size-full h-3/4 w-3/4 self-center rounded-full border-2 border-white" />
                            </div>
                          </div>
                          <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                            <p className="text-stone-500">${product.price}</p>
                            <div className="flex items-center gap-1 text-neutral-700">
                              <p>x{product.quantity}</p>
                              <div className="flex cursor-pointer flex-col">
                                <ArrowUp2
                                  size={9}
                                  variant="Bold"
                                  onClick={() => incrementProduct(product)}
                                />
                                <ArrowDown2
                                  size={9}
                                  variant="Bold"
                                  onClick={() => decrementProduct(product)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
              <hr className="mx-1" />
              <div className="flex justify-between text-sm text-stone-500">
                <strong>Total</strong>
                <p className="font-medium">${totalPrice?.toFixed(2)}</p>
              </div>
              <Button
                text="Checkout"
                icon={<Bag2 />}
                className={["bg-indigo-900 text-white"]}
                action={checkout}
              />
            </>
          ) : (
            <p className="mb-4 text-center text-sm font-semibold text-gray-500">
              Cart is Empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
