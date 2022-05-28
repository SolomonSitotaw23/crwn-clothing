import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/signin-and-signup/signin-and-signup.component";
import { auth } from "./firebse/firebse.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: true,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
