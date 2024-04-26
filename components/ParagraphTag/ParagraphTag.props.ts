import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ParagraphTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}
