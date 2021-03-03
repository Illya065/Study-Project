import React from "react";
import profile from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from "./ProfileStatusHook";

const ProfileInfo = (props) => {
  return (
    <div className={profile.profile}>
      <div className={profile.profile__img}></div>
      <div className={profile.profile__block}>
        <div className={profile.profile__ava}></div>
        <div className={profile.profile__info}>
          <div className={profile.profile__name}>{props.profile.fullName}</div>
          <ul className={profile.profile__details}>
            <li>Date: 06.07.00</li>
            <li>City: Khmelnytskiy</li>
            <li>Edu: VNMU</li>
            <li>Facebook: {props.profile.contacts.facebook}</li>
          </ul>
        </div>
      </div>
      <ProfileStatusHook
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
