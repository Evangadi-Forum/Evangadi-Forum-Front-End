import React from "react";

function Toast({ message, time = "Just now", title = "Notification" }) {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <img src="..." className="rounded me-2" alt="..." />
        <strong className="me-auto">{title}</strong>
        <small>{time}</small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
}

export default Toast;
