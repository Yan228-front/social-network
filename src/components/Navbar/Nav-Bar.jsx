import classes from "./Nav-Bar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' activeClassName={classes.active}>
          Профиль
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' activeClassName={classes.active}>
          Сообщения
        </NavLink>
        <div>
          <NavLink to='/users' activeClassName={classes.active}>
            Users
          </NavLink>
        </div>
      </div>
      <div className={classes.item}>
        <NavLink to='/news' activeClassName={classes.active}>
          Новости
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music' activeClassName={classes.active}>
          Музыка
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings' activeClassName={classes.active}>
          Настройки
        </NavLink>
        <div>
          <NavLink to='/friend' activeClassName={classes.active}>
            Friend
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
