import React from "react";
import cn from "classnames";
import { BadgeProps } from "./Badge.props";

import styles from "./Badge.module.css";

const Badge = ({
  children,
  color = "transparent",
  href,
  size = "small",
  className,
  ...props
}: BadgeProps): JSX.Element => {
  return (
    <div
      className={cn(styles.badge, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.transparent]: color === "transparent",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.gray]: color === "gray",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Badge;
