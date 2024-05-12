import React from "react";
import { withLayout } from "@/layout/Layout";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { firstLevelMenu } from "@/helpers/helpers";
import { ParsedUrlQuery } from "querystring";

function Courses({ firstCategory }: CoursesProps): JSX.Element {
  return <>Type: {firstCategory}</>;
}

export default withLayout(Courses);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => "/" + m.route),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CoursesProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory: firstCategoryItem.id,
    }
  );
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
