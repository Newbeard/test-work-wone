import React from "react";
import "./Input.css"

function Input({ inputToken, isMobile, status}) {
  return (
    <>
      {/* Мобильная версия */}
      {isMobile ? 
      (
        <div className="keyboard_input-box-mobile">
        <input className={`keyboard_input-mobile ${status && (status==="successfully"? "active" : "error")}`} placeholder={inputToken} />
        </div>
      ) : 
      (
        <div className="keyboard_input-box">
        <input className= {`keyboard_input-desktop ${status && (status==="successfully"? "active" : "error")}`}  placeholder={inputToken} />
        </div>
      )}
    </>
  );
}

export default Input;
