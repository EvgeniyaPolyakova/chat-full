import React, { useEffect, useState } from "react";
import s from "./messenger-form.module.scss";
import { socket } from "../app/app";

let endTimer;

const MessengerForm = ({ setTyping, typing }) => {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  const onChange = (e) => {
    setMessage(e.target.value);
    if (!typing) {
      socket.emit("starttyping");
    }
    if (endTimer) {
      clearTimeout(endTimer);
    }
    endTimer = setTimeout(() => {
      socket.emit("endtyping");
    }, 1000);
  };

  useEffect(() => {
    socket.on("starttyping", () => {
      setTyping(true);
    });
    socket.on("endtyping", () => {
      setTyping(false);
    });
  });

  return (
    <form className={s.formMessage} onSubmit={onSubmit}>
      <input
        required
        type="text"
        className={s.input}
        placeholder="Сообщение"
        value={message}
        onChange={onChange}
      />
      <button type="submit" className={s.sendButton}>
        <img
          src="/images/send-icon.png"
          height="30px"
          width="30px"
          className={s.sendImg}
          alt="icon"
        />
      </button>
    </form>
  );
};

export default MessengerForm;
