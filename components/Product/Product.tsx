import React from "react";
import cn from "classnames";
import { ProductProps } from "./Product.props";

import styles from "./Product.module.css";
import { Card } from "../Card/Card";
import Image from "next/image";
import Rating from "../Rating/Rating";
import Badge from "../Badge/Badge";
import { priceRu } from "@/helpers/helpers";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";

const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image width={70} height={70} src={product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Badge color="green" className={styles.oldPrice}>
            {priceRu(product.price - product.oldPrice)}
          </Badge>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.month}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewsAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((category) => (
          <Badge key={category} className={styles.category} color="transparent">
            {category}
          </Badge>
        ))}
      </div>
      <div className={styles.priceTitle}>Цена</div>
      <div className={styles.creditTitle}>Кредит</div>
      <div className={styles.rateTitle}>{product.reviewsCount}</div>
      <Divider className={styles.hr} />
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>фичи</div>
      <div className={styles.advBlock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advTitle}>Преимущества</div>
            <div>{product.advantages}</div>
          </div>
        )}

        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button
          appearance="transparent"
          arrow="right"
          className={styles.reviewButton}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};

export default Product;
