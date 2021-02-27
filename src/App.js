import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import Login from "./Login";
//import { CgDarkMode } from "react-icons/cg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";

function App() {
  const [on, setOn] = useState(false);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header on={on} setOn={setOn} />
          <div className="app_body">
            <Sidebar on={on} />
            <Switch>
              <Route path="/mail">
                <Mail on={on} />
              </Route>
              <Route path="/">
                <EmailList on={on} />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail on={on} />}
        </div>
      )}
    </Router>
  );
}

export default App;
