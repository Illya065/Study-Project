import React from "react";
import d from "./DialogItem.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   return (
      <div className={d.users__item}>
         <div className={d.users__ava}>
            
         </div>
         <NavLink to={`/dialogs/${props.id}`} activeClassName = {d.active}>
            {props.name}
         </NavLink>
      </div>
   )
}

export default DialogItem