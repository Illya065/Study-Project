import React from "react";
import nav from'./Nav.module.css'
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const Nav = (props) => {
   return (
      <div className={nav.navigation}>
        <div className={nav.navigation__container}>
          <ul className={nav.navigation__list}>
            <li>
              <NavLink 
              to="/profile" 
              activeClassName = {nav.active}>
                 Profile
               </NavLink>
            </li>
            <li>
              <NavLink 
              to="/dialogs" 
              activeClassName = {nav.active}>
                 Messages
               </NavLink>
            </li>
            <li>
              <NavLink 
              to='/users' 
              activeClassName = {nav.active}>
                 Users
               </NavLink>
            </li>
            <li>
              <a href="/music">Music</a>
            </li>
            <li>
              <a href="/settings">Settings</a>
            </li>
          </ul>
          <FriendsContainer store={props.store}/>
        </div>
      </div>
   )
}

export default Nav