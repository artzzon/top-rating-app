import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";

const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  return <div>{products && products.length}</div>;
};

export default TopPageComponent;
