import React from "react";
import DialogPreview from "../dialog-preview/dialog-preview";
import s from "./chat-list.module.scss";

const ChatList = () => {
  return (
    <div className={s.chatList}>
      <ul className={s.list}>
        <li>
          <DialogPreview />
        </li>
      </ul>
    </div>
  );
};

export default ChatList;
