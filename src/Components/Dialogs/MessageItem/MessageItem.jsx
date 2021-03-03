import React from "react";
import "./MessageItem.css";

const MessageItem = (props) => {
   return (
      <div className={`messages__item ${props.stateclass}`}>
            {props.message}
      </div>
   )
}

export default MessageItem