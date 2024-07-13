import clsx from "clsx";

export const Button = ({ text, icon, action, className = [] }) => {
  return (
    <button
      className={clsx(
        "flex w-full max-w-64 items-center justify-center gap-3 rounded-full py-3 text-sm font-semibold",
        ...className,
      )}
      onClick={action}
    >
      {icon}
      {text}
    </button>
  );
};
