import React, { KeyboardEvent } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import SearchIcon from "./Search.svg";
import cn from "classnames";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps) => {
  const [search, setSearch] = React.useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: { q: search },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
