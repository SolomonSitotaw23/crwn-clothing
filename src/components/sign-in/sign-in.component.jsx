import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from "./sign-in.style";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handelSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };
  const handelChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle> I Already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handelSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          label="Email"
          onChange={handelChange}
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handelChange}
          label="Password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google{" "}
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
