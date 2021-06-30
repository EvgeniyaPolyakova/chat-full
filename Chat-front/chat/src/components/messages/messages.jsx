import React from "react";
import s from "./messages.module.scss";
import Message from "../message";

const Messages = ({ messagesArray }) => {
  return (
    <div className={s.messages}>
      {messagesArray.map(({ id, message, sender }) => (
        <Message key={id} message={message} sender={sender} />
      ))}
    </div>
  );
};

export default Messages;
