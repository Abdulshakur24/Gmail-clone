import React from "react";
import { Button } from "@material-ui/core";
import { login } from "./features/userSlice";
import "./Login.css";
import { auth, provider } from "./Firebase";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const signUp = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        })
      );
    });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signUp}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
