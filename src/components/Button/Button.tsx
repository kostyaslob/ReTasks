import type { ReactNode, MouseEventHandler } from "react";
import css from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  selected?: boolean;
  type?: "button" | "submit";
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function Button({
  selected = false,
  type = "button",
  children,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}