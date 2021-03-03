import React from "react";
import f from'./Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";


const Friends = (props) => {
   const friends = props.navBar.friendsData.map( item => <FriendsItem name = {item.name} key={item.id} />)

   return (
      <div className={f.friends}>
         <div className={f.frieds__title}>
            Friends
         </div>
         <div className={f.friends__block}>
            {friends}
         </div>
      </div>
   )
}

export default Friends