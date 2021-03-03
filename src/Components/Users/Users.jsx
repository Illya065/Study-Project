import * as axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import u from "./Users.module.css";

function Users(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  debugger;
  return (
    <div className={u.container}>
      <div className={u.pages}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && u.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.usersPage.users.map((user) => {
        return (
          <div className={u.item}>
            <div className={u.item__ava}>
              <NavLink to={`/profile/${user.id}`}>
                <div></div>
              </NavLink>

              {user.followed ? (
                <button
                  disabled={props.followingInProgres.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollowThunk(user.id);
                    //   props.toggleIsFollowing(true, user.id);
                    //   usersAPI.deleteUsers(user.id).then((data) => {
                    //     if (data.resultCode === 0) {
                    //       props.unfollow(user.id);
                    //     }
                    //     props.toggleIsFollowing(false, user.id);
                    //   });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgres.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.followThunk(user.id);
                    //   props.toggleIsFollowing(true, user.id);
                    //   usersAPI.postUsers(user.id).then((data) => {
                    //     if (data.resultCode === 0) {
                    //       props.follow(user.id);
                    //     }
                    //     props.toggleIsFollowing(false, user.id);
                    //   });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div className={u.item__info}>
              <div className={u.right}>
                <div className={u.name}>{user.name}</div>
                <div className={u.status}>{user.status}</div>
              </div>
              <div className={u.left}>
                <div className={u.country}></div>
                <div className={u.city}></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
