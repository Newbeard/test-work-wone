import React from "react";
import "./Button.css"

function Button({ onChange, value, isMobile, isDisable }) {
  return (
    <>
      {/* Мобильная версия */}
      {isMobile ? (
        <button
          className="keyboard_btn-mobile"
          disabled={isDisable}
          onClick={() => onChange(value)}
        >
          {value}
        </button>
      ) : 
      (
        <button
          className="keyboard_btn-desktop"
          disabled={isDisable}
          onClick={() => onChange(value)}
        >
          {value}
        </button>
      )}
    </>
  );
}

export default Button;
