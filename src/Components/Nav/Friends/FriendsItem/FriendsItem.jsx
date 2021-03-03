import React from "react";
import fi from'./FriendsItem.module.css'


const FriendsItem = (props) => {
   return (
      <div className={fi.friends__item}>
         <div className={fi.friends__ava}>
            
         </div>
         <div className={fi.friends__name}>
            {props.name}    
         </div>
      </div>
   )
}

export default FriendsItem