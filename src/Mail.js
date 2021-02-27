import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";

function Mail({ on }) {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail" style={on ? { backgroundColor: "#111" } : {}}>
      <div className="mail_tools" style={on ? { backgroundColor: "#111" } : {}}>
        <div className="mail_toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <ErrorIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <DeleteIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <EmailIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <WatchLaterIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <CheckCircleIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <LabelImportantIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={on ? { color: "white" } : {}} />
          </IconButton>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMoreIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <PrintIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <ExitToAppIcon style={on ? { color: "white" } : {}} />
          </IconButton>
        </div>
      </div>
      <div className="mail_body" style={on ? { backgroundColor: "#111" } : {}}>
        <div className="mail_bodyHeader">
          <h2 style={on ? { color: "white" } : {}}>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail_important" />
          <p style={on ? { color: "white" } : {}}>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time}</p>
        </div>
        <div className="mail_message" style={on ? { color: "white" } : {}}>
          {selectedMail?.description}
        </div>
      </div>
    </div>
  );
}

export default Mail;
