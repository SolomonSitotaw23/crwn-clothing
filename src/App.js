import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ShopPage from "./shop/shop.component";
import CollectionPage from "./pages/collection/collection.component";

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebse/firebse.utils";
//redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckOutPage from "./pages/check-out/check-out.component";

import { selectCollectionForPreview } from "./redux/shop/shop.selector";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route exact path="checkout" element={<CheckOutPage />} />
          <Route
            exact
            path="signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </Router>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
