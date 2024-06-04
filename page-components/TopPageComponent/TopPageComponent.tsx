import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";

import styles from "./TopPageComponent.module.css";
import HeadTag from "@/components/HeadTag/HeadTag";
import Badge from "@/components/Badge/Badge";
import parse from "html-react-parser";
import HhData from "@/components/HhData/HhData";
import { TopLevelCategory } from "@/interfaces/page.interface";
import Advantages from "@/components/Advantages/Advantages";
import ParagraphTag from "@/components/ParagraphTag/ParagraphTag";

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
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh}></HhData>
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <HeadTag tag="h2">Преимущества</HeadTag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <div className={styles.seo}>{parse(page.seoText)}</div>}
      <HeadTag tag="h2">Получаемые навыки</HeadTag>
      {page.tags.map((t) => (
        <Badge key={t} color="primary">
          {t}
        </Badge>
      ))}
    </div>
  );
};

export default TopPageComponent;
