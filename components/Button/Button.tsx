import React from "react";
import Image from "next/image";
import cn from "classnames";
import { ButtonProps } from "./Button.props";

import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";

const Button = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.transparent]: appearance === "transparent",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.right]: arrow === "right",
            [styles.down]: arrow === "down",
          })}
        />
      )}
    </button>
  );
};

export default Button;
