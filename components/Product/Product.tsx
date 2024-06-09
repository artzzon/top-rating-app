import React from "react";
import cn from "classnames";
import { ProductProps } from "./Product.props";

import styles from "./Product.module.css";

const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return <div>{product.title}</div>;
};

export default Product;
