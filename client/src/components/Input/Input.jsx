import React from "react";
import "./Input.css"

function Input({ inputToken, isMobile, status}) {
  return (
    <div className="keyboard_input-box">
      {/* Мобильная версия */}
      {isMobile ? 
      (
        <input className={`keyboard_input-mobile ${status && (status==="successfully"? "active" : "error")}`} placeholder={inputToken} />
      ) : 
      (
        <input className= {`keyboard_input-desktop ${status && (status==="successfully"? "active" : "error")}`}  placeholder={inputToken} />
      )}
    </div>
  );
}

export default Input;
