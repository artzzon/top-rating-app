import React from "react";
import { TextareaProps } from "./Textarea.props";
import cn from "classnames";

import styles from "./Textarea.module.css";

const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={cn(className, styles.textarea)} {...props} />;
};

export default Textarea;
