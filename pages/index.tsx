import React from "react";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import HeadTag from "@/components/HeadTag/HeadTag";
import ParagraphTag from "@/components/ParagraphTag/ParagraphTag";
import Rating from "@/components/Rating/Rating";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { GetStaticProps } from "next";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = React.useState<number>(4);
  console.log(firstCategory);
  return (
    <>
      {/* <HeadTag tag="h1">Главная</HeadTag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="transparent" arrow="down">
        Еще кнопка
      </Button>
      <ParagraphTag size="small">Маленький</ParagraphTag>
      <ParagraphTag size="medium">Средний</ParagraphTag>
      <ParagraphTag size="large">Большой</ParagraphTag>
      <Badge>Прозр</Badge>
      <Badge color="green">Зелен</Badge>
      <Badge color="red" size="small">
        Красный
      </Badge>
      <Badge color="primary">Основной</Badge>
      <Badge color="gray">Вк</Badge>

      <Rating rating={rating} isEditable setRating={setRating} /> */}

      <ul>
        {menu.map((el) => (
          <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
