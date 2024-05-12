import React from "react";
import { AppContext } from "@/context/app.context";
import { TopLevelCategory } from "@/interfaces/page.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import ServicesIcon from "./icons/services.svg";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Menu.module.css";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    id: TopLevelCategory.Courses,
    name: "Курсы",
    route: "courses",
    icon: <CoursesIcon />,
  },
  {
    id: TopLevelCategory.Services,
    name: "Сервисы",
    route: "services",
    icon: <ServicesIcon />,
  },
  {
    id: TopLevelCategory.Books,
    name: "Книги",
    route: "books",
    icon: <BooksIcon />,
  },
  {
    id: TopLevelCategory.Products,
    name: "Товары",
    route: "products",
    icon: <ProductsIcon />,
  },
];

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = React.useContext(AppContext);

  const buildFirstLevelMenu = () => {
    return (
      <>
        {firstLevelMenu.map((menuItem) => (
          <div key={menuItem.id}>
            <a href={`/${menuItem.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menuItem.id === firstCategory,
                })}
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </a>
            {menuItem.id === firstCategory && buildSecondLevelMenu(menuItem)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevelMenu = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevelMenu(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <a
        href={`${route}/${page.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
        key={page._id}
      >
        {page.category}
      </a>
    ));
  };

  return <div>{buildFirstLevelMenu()}</div>;
};

export default Menu;
