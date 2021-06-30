import React from "react";
import s from "./current-user.module.scss";

const CurrentUser = ({ typing }) => {
  return (
    <div className={s.currentUser}>
      <p className={s.userName}>Имя пользователя</p>
      <p className={typing ? s.typing : s.typingHidden}>Печатает...</p>
    </div>
  );
};

export default CurrentUser;
