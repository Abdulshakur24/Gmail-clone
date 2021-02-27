import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { db } from "./Firebase";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function EmailList({ on }) {
  const [emails, setEmails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList" style={on ? { backgroundColor: "#111" } : {}}>
      <div
        className="emailList_settings"
        style={on ? { backgroundColor: "#111" } : {}}
      >
        <div className="emailList_settingsLeft">
          <Checkbox style={on ? { color: "white" } : {}} />
          <IconButton>
            <ArrowDropDownIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <RedoIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={on ? { color: "white" } : {}} />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <ChevronRightIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon style={on ? { color: "white" } : {}} />
          </IconButton>
          <IconButton>
            <SettingsIcon style={on ? { color: "white" } : {}} />
          </IconButton>
        </div>
      </div>
      <div
        className="emailList_sections"
        style={on ? { backgroundColor: "#111" } : {}}
      >
        <Section
          Icon={InboxIcon}
          title="Primary"
          color="red"
          selected
          on={on}
        />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" on={on} />
        <Section
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
          on={on}
        />
      </div>
      <div
        className="emailList_list"
        style={on ? { backgroundColor: "#111" } : {}}
      >
        {emails.length === 0 ? (
          <div className="emailList_messages">
            <div className="emailList_message">
              <h2 style={on ? { color: "white" } : {}}>
                There are no mails for now!
              </h2>
              <h3 style={on ? { color: "white" } : {}}>Drop a mail.</h3>
              <button
                onClick={() => dispatch(openSendMessage())}
                style={on ? { color: "white", backgroundColor: "#111" } : {}}
              >
                Click here to post a mail
              </button>
            </div>
          </div>
        ) : (
          emails.map(({ id, data: { to, subject, message, timestamp } }) => (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
              on={on}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default EmailList;
