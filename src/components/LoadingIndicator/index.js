import React from "react";
import "./styles.scss";

export default function LoadingIndicator() {
  return (
    <div className="loading-indicator-container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
