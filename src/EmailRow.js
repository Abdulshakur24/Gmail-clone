import { IconButton } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import React from "react";
import "./EmailRow.css";
import { Subject } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

function EmailRow({ id, title, subject, description, time, on }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail");
  };
  return (
    <div className="emailRow">
      <div className="emailRow_options">
        <Checkbox
          className="emailRow_icons"
          style={on ? { color: "white" } : {}}
        />
        <IconButton className="emailRow_icons">
          <StarBorderIcon style={on ? { color: "white" } : {}} />
        </IconButton>
        <IconButton className="emailRow_icons">
          <LabelImportantIcon style={on ? { color: "white" } : {}} />
        </IconButton>
      </div>
      <h3
        onClick={openMail}
        className="emailRow_title"
        style={on ? { color: "white" } : {}}
      >
        {title}
      </h3>
      <div onClick={openMail} className="emailRow_message">
        <h4 style={on ? { color: "white" } : {}}>
          {subject} <span className="emailRow_description">-{description}</span>
        </h4>
      </div>

      <p
        onClick={openMail}
        className="emailRow_time"
        style={on ? { color: "white" } : {}}
      >
        {time}
      </p>
    </div>
  );
}

export default EmailRow;
