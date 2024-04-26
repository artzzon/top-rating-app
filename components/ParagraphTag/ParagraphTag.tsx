import React from "react";
import cn from "classnames";
import { ParagraphTagProps } from "./ParagraphTag.props";

import styles from "./ParagraphTag.module.css";

const ParagraphTag = ({
  size = "medium",
  children,
}: ParagraphTagProps): JSX.Element => {
  return <p className={cn(styles.p, styles[size])}>{children}</p>;
};

export default ParagraphTag;
