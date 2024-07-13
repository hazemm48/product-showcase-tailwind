import clsx from "clsx";
import { CloseCircle } from "iconsax-react";
import { useContext, useLayoutEffect } from "react";
import { AlertContext } from "../../contexts/alert-context.jsx";

export const Toast = () => {
  const { state: alertState, dispatch } = useContext(AlertContext);
  console.log("🚀 ~ Toast ~ alertState:", alertState)

  const variants = {
    info: "bg-[#cfe2ff] ",
    success: "bg-[#d1e6dd]",
    warning: "",
    error: "",
  };

  const onClose = () => dispatch({ type: "HIDE_ALERT" });

  useLayoutEffect(() => {
    if (alertState.text) {
      const timeout = setTimeout(() => onClose(), 3000);
      return () => clearTimeout(timeout);
    }
  }, [alertState.text]);

  return (
    alertState.text && (
      <div
        class={clsx(
          "fixed animate-slideLeft right-0 mt-3 flex w-full max-w-xs items-center justify-between rounded-full p-4 shadow-lg cursor-pointer",
          variants[alertState.type],
        )}
        onClick={onClose}
      >
        <p className="font-semibold">{alertState.text}</p>
        <CloseCircle size={26} />
      </div>
    )
  );
};
