import React from "react";
import { AppContext } from "@/context/app.context";

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = React.useContext(AppContext);

  return (
    <div>
      <ul>
        {menu.map((item, index) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
