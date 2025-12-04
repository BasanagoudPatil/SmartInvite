import React, { useEffect } from "react";
import "./SuccessAnimation.css";

export default function SuccessAnimation({ message, redirectTo, navigate }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo);
    }, 1500);  // 1.5 sec animation then redirect

    return () => clearTimeout(timer);
  }, [navigate, redirectTo]);

  return (
    <div className="success-overlay">
      <div className="success-box">
        <div className="checkmark-animation">
          ✓
        </div>
        <p className="success-text">{message}</p>
      </div>
    </div>
  );
}
