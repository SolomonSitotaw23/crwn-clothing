import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebse/firebse.utils";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.style";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handelSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  handelChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignInContainer>
        <SignInTitle> I Already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            label="Email"
            onChange={this.handelChange}
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handelChange}
            label="Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google{" "}
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
