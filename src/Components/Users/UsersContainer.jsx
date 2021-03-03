import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleIsFollowing,
  getUsers,
  unfollowThunk,
  followThunk,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import React, { Component } from "react";
import Loader from "../common/loader";
import { usersAPI } from "../../api/api";
import {
  getUsersPage,
  getCurrentPage,
  getFollowingInProgres,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/usersSelectors";

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    //  this.props.setIsFetching(true);
    //  this.props.setCurrentPage(pageNumber);
    //  usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //    this.props.setIsFetching(false);
    //    this.props.setUsers(data.items);
    //  });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          usersPage={this.props.usersPage}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          toggleIsFollowing={this.props.toggleIsFollowing}
          followingInProgres={this.props.followingInProgres}
          unfollowThunk={this.props.unfollowThunk}
          followThunk={this.props.followThunk}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersPage: getUsersPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgres: getFollowingInProgres(state),
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowing,
  getUsers,
  unfollowThunk,
  followThunk,
})(UsersAPIComponent);

export default UsersContainer;
