import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  color?: "transparent" | "red" | "gray" | "green" | "primary";
  href?: string;
  size?: "small" | "medium";
}
