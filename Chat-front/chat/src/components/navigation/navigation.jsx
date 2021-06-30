import React from "react";
import s from "./navigation.module.scss";

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li>
            <a href="#">Ссылка</a>
          </li>
          <li>
            <a href="#">Ссылка</a>
          </li>
          <li>
            <a href="#">Ссылка</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
