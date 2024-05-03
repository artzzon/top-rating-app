import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import styles from "./Footer.module.css";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <div>
        OwlTop &copy; 2020 - {new Date().getFullYear()} Все права защищены
      </div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};

export default Footer;
