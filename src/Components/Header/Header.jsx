import React from "react";
import { NavLink } from "react-router-dom";
import head from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={head.header}>
      <div className={head.container}>
        <div className={head.content}>
          <div className={head.header__logo}>LOGO</div>
          <div className={head.header__login}>
            {props.isAuth ? (
              <div>
                {props.login} - <button onClick={props.logOut}>Log Out</button>
              </div>
            ) : (
              <NavLink to={`/login`}>Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
