import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Keyboard.css";

function Keyboard({ isMobile }) {
  // state для хранения токена
  const [inputToken, setInputToken] = useState("");

  // state для хранения токена с маской
  const [inputTokenView, setInputTokenView] = useState("_ _ _ – _ _ _");

  // Флаг для блокировки кнопок
  const [isDisable, setisDisable] = useState(false);

  // Флаг статус авторизации
  const [status, setStatus] = useState(false);

  // Функция отправки токена на сервер
  const changeToken = async () => {
    const { data } = await axios.post("http://localhost:7777/authorization", {
      token: inputToken,
    });
    console.log(data);
    if (data.message === "successfully") {
      setStatus("successfully");
    }
    else{
      setStatus("error")
    }
  };
// отправкa токена на сервер
  useEffect(() => {
    if (inputToken.length === 6) {
      setisDisable(true);
      changeToken();
    }
  }, [inputToken]);

// Функции клавиш
  const onChange = (number) => {
    if (inputToken.length < 6) {
      setInputToken((prev) => prev + number.toString());
      setInputTokenView(prev => prev.replace('_', number))
    }
  };

  const onDelete = () => {
    setInputToken((perev) => perev.substring(0, perev.length - 1));
    setInputTokenView(prev => prev.split('').reverse().join('').replace(/\d/, '_').split('').reverse().join(''))
    setisDisable(false);
    setStatus(false)
  };

  return (
    <div className="keyboard">
      <p className="keyboard_text">Введите код из SMS </p>
      <Input inputToken={inputTokenView} isMobile={isMobile} status={status}/>
      <div className="keyboard_btn-list">
        <Button
          value={1}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
        <Button
          value={2}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
        <Button
          value={3}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
      </div>
      <div className="keyboard_btn-list">
        <Button
          value={4}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
        <Button
          value={5}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
        <Button
          value={6}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
      </div>
      <div className="keyboard_btn-list">
        <Button
          value={7}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
        <Button
          value={8}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
        <Button
          value={9}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
      </div>
      <div className="keyboard_btn-list">
        <Button value={"exit"} isMobile={isMobile} isDisable={true} />
        <Button
          value={0}
          onChange={onChange}
          isMobile={isMobile}
          isDisable={isDisable}
        />
        <Button value={"delete"} onChange={onDelete} isMobile={isMobile} />
      </div>
    </div>
  );
}
export default Keyboard;
