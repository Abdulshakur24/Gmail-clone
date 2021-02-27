import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";

function Header({ on, setOn }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div
      className="header"
      style={on ? { backgroundColor: "#111", border: "1px solid #111" } : {}}
    >
      <div className="header_left">
        <IconButton>
          <MenuIcon style={on ? { color: "white" } : {}} />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
          style={on ? { backgroundColor: "transparent" } : {}}
        />
      </div>
      <div
        className="header_middle"
        style={on ? { backgroundColor: "#111", border: "1px solid white" } : {}}
      >
        <SearchIcon style={on ? { color: "white" } : {}} />
        <input
          placeholder="Search mail"
          type="text"
          style={on ? { color: "white" } : {}}
        />
        <ArrowDropDownIcon style={on ? { color: "white" } : {}} />
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon style={on ? { color: "white" } : {}} />
        </IconButton>
        <IconButton>
          <NotificationsIcon style={on ? { color: "white" } : {}} />
        </IconButton>
        <IconButton onClick={() => setOn(!on)}>
          <p>
            {on ? (
              <Brightness7Icon style={on ? { color: "white" } : {}} />
            ) : (
              <Brightness7Icon />
            )}
          </p>
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
