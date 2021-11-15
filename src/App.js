import "./App.css";
import Navbar from "./components/Navbar/Nav-Bar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friend from "./components/Friend/Friend";
import { Route, withRouter } from "react-router-dom";
import UsersConteiner from "./components/Users/UsersConteiner";
import HeaderConteiner from "./components/Header/HeaderConteiner";
import LoginFormik from "./components/Login/Login";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import withSuspense from "./hoc/withSuspense";

const DialogsConteiner = React.lazy(() =>
  import("./components/Dialogs/DialogsConteiner")
);
const ProfileConteiner = React.lazy(() =>
  import("./components/Profile/ProfileConteiner")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className='app-wrapper'>
        <HeaderConteiner />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to={"/profile"} />} />
            <Route path='/dialogs' render={withSuspense(DialogsConteiner)} />
            <Route
              path='/profile/:userId?'
              render={withSuspense(ProfileConteiner)}
            />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/friend' render={() => <Friend />} />
            <Route path='/users' render={() => <UsersConteiner />} />
            <Route path='/login' render={() => <LoginFormik />} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppConteiner = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

//basename={procces.env.PUBLIC_URL}
const SamuraiJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppConteiner />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJsApp;
