import React from "react";
import s from "./chat-filter.module.scss";

const ChatFilter = () => {
  return (
    <div className={s.search}>
      <input type="text" className={s.input} placeholder="Поиск" />
    </div>
  );
};

export default ChatFilter;
