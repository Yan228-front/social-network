import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src='https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/a9/e6/27/a9e62798-25b6-59a6-5538-9ed0809eeb85/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png'></img>

      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {" "}
            {props.login} - <button onClick={props.logout}>Выйти</button>{" "}
          </div>
        ) : (
          <NavLink to={"/login"}>Aвторизоваться</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
