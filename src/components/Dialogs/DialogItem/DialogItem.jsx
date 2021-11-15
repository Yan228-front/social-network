import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <img
        src='https://www.meme-arsenal.com/memes/33621cce7259d40c4340cee244b8f73a.jpg'
        alt='profile icon'
      ></img>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
