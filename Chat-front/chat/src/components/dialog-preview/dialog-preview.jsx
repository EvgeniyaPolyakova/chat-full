import React from "react";
import s from "./dialog-preview.module.scss";

const DialogPreview = () => {
  return (
    <div className={s.dialogItem}>
      <button className={s.button}>
        <img
          src="/images/orange.png"
          width="35px"
          height="35px"
          className={s.avatar}
          alt="avatar"
        />
        <div className={s.dialogTitle}>
          <p className={s.name}>Имя пользователя</p>
          <p className={s.textMessage}>
            Текст сообщения Текст сообщения Текст сообщения
          </p>
        </div>
      </button>
    </div>
  );
};

export default DialogPreview;
