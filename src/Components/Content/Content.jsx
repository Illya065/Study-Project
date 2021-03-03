import React from "react";
import content from "./Content.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = (props) => {
  return (
    <div className={content.main__content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />

      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Content;
