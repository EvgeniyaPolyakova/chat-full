import React, { useEffect, useState } from "react";
import Navigation from "../navigation";
import s from "./app.module.scss";
import Aside from "../aside";
import Messenger from "../messenger/messenger";
import { io } from "socket.io-client";

export const socket = io("http://localhost:3001");

const App = () => {
  const [isOverflowed, setIsOverflowed] = useState(false);
  useEffect(() => {
    socket.on("connected", (messageSocket) => {});

    socket.on("disconnect", () => {});

    socket.on("overflow", (data) => {
      if (data === socket.id) {
        setIsOverflowed(true);
      }
    });
  }, []);

  if (isOverflowed) {
    return <h1>Чат переполнен</h1>;
  }

  return (
    <div className={s.app}>
      <Aside />
      <Navigation />
      <Messenger />
    </div>
  );
};

export default App;
