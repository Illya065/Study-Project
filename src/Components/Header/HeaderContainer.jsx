import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { authMe, logOut } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
}

export default connect(mapStateToProps, { logOut })(HeaderContainer);
