import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function SideBar({ on }) {
  const dispatch = useDispatch();
  return (
    <div className="sidebar" style={on ? { backgroundColor: "#111" } : {}}>
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
        style={on ? { color: "white" } : {}}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={52}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={52} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={52} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={52} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={52} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={52} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={52} />
      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <DuoIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <PhoneIcon style={on ? { color: "white" } : {}} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
