import React from "react";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interfaces/menu.interface";
import cn from "classnames";
import styles from "./Menu.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { firstLevelMenu } from "@/helpers/helpers";

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = React.useContext(AppContext);
  const router = useRouter();

  const openSecondLevelMenu = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

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
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevelMenu(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevelMenu(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevelMenu = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <Link
        href={`/${route}/${page.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${page.alias}` == router.asPath,
        })}
        key={page._id}
      >
        {page.category}
      </Link>
    ));
  };

  return <div>{buildFirstLevelMenu()}</div>;
};

export default Menu;
