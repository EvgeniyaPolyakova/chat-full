import React, { useEffect, useState } from "react";
import MessengerForm from "../messenger-form/messenger-form";
import s from "./messenger.module.scss";
import Messages from "../messages/messages";
import CurrentUser from "../current-user/current-user";
import { socket } from "../app/app";

const Messenger = () => {
  const [messagesArray, setMessagesArray] = useState([]);
  const [typing, setTyping] = useState(false);

  const sendMessageHandler = (message, sender) => {
    const newMessage = {
      id: Date.now(),
      message,
      sender,
    };
    setMessagesArray((prev) => {
      return [...prev, newMessage];
    });
  };

  useEffect(() => {
    socket.on("message", (messageSocket) => {
      sendMessageHandler(messageSocket.mes, messageSocket.id);
    });
  }, []);

  return (
    <main className={s.messenger}>
      <CurrentUser typing={typing} />
      <Messages messagesArray={messagesArray} />
      <MessengerForm setTyping={setTyping} typing={typing} />
    </main>
  );
};

export default Messenger;
