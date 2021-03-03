import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { connect } from "react-redux";
import { intializeApp } from "./redux/appReducer";
import Loader from "./Components/common/loader";

class App extends React.Component {
  componentDidMount() {
    this.props.intializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />

        <Nav store={this.props.store} />

        <div className="main">
          <Route
            path="/profile/:userId?"
            render={() => <ContentContainer store={this.props.store} />}
          />

          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={this.props.store} />}
          />

          <Route
            path="/users"
            render={() => <UsersContainer store={this.props.store} />}
          />

          <Route
            path="/login"
            render={() => <Login store={this.props.store} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { intializeApp })(App);
