import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SearchIcon from "./Search.svg";
import cn from "classnames";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";

const Search = ({ className, ...props }: SearchProps) => {
  const [search, setSearch] = React.useState("");

  return (
    <div className={cn(className, styles.search)}>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button appearance="primary" className={styles.button} onClick={() => {}}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
