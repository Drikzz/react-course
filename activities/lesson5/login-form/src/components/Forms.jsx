import { useState } from "react";
import "./Forms.css";

// 4d
export function Forms() {
  // 4e
  const [isShowing, setIsShowing] = useState(false);

  const passText = isShowing ? "Hide" : "Show";
  function showPass() {
    setIsShowing(!isShowing);
  }

  return (
    <div className="forms-container">
      <div className="form-input-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="form-input form-input-email"
        />
      </div>

      <div className="form-input-container">
        <input
          type={isShowing ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          className="form-input form-password-input"
        />
        <button className="show-pass-button" onClick={showPass}>
          {passText}
        </button>
      </div>
    </div>
  );
}
