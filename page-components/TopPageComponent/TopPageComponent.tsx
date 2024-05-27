import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";

import styles from "./TopPageComponent.module.css";
import HeadTag from "@/components/HeadTag/HeadTag";
import Badge from "@/components/Badge/Badge";
import Head from "next/head";
import { Card } from "@/components/Card/Card";
import HhData from "@/components/HhData/HhData";
import { TopLevelCategory } from "@/interfaces/page.interface";

const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HeadTag tag="h1">{page.title}</HeadTag>
        {products && (
          <Badge color="gray" size="medium">
            {products.length}
          </Badge>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <HeadTag tag="h2">Вакансии - {page.category}</HeadTag>
        <Badge color="red" size="medium">
          hh.ru
        </Badge>
      </div>
      {firstCategory === TopLevelCategory.Courses && (
        <HhData {...page.hh}></HhData>
      )}
    </div>
  );
};

export default TopPageComponent;
