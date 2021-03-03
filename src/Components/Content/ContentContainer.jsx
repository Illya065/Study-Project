import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Content from "./Content";
import {
  profileThunk,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ContentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.profileThunk(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Content
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
}

let WithUrlDataContainerComponent = withRouter(ContentContainer);

export default compose(
  connect(mapStateToProps, { profileThunk, getStatus, updateStatus }),
  withAuthRedirect
)(WithUrlDataContainerComponent);
