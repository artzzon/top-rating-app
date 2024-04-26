import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: "primary" | "transparent";
  children: React.ReactNode;
  arrow?: "right" | "down" | "none";
}
