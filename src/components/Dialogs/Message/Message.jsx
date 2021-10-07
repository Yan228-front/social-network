import classes from "./Message.module.css";
import React from "react";

const Message = (props) => {
  return (
    <div>
      <div className={classes.dialog}>{props.message}</div>
    </div>
  );
};

export default Message;
