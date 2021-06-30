import React from "react";
import s from "./message.module.scss";
import { socket } from "../app/app";

const Message = ({ id, message, sender }) => {
  return (
    <div
      className={socket.id === sender ? s.oneMessageRight : s.oneMessageLeft}
    >
      <p className={s.textMessage} key={id}>
        {message}
      </p>
    </div>
  );
};

export default Message;
