import React from "react";
import ChatFilter from "../chat-filter/chat-filter";
import ChatList from "../chat-list/chat-list";
import s from "./aside.module.scss";

const Aside = () => {
  return (
    <aside className={s.aside}>
      <ChatFilter />
      <ChatList />
    </aside>
  );
};

export default Aside;
