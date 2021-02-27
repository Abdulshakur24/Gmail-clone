import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./Firebase";
import firebase from "firebase";

function SendMail({ on }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSumbit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div
      className="sendMail"
      style={
        on
          ? {
              backgroundColor: "#111",
              border: "1px solid white",
              boxSizing: "5px 5px 5px 5px white",
            }
          : {}
      }
    >
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSumbit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          ref={register({ required: true })}
          style={
            on && {
              backgroundColor: "#111",
              color: "white",
              border: "1px solid #111",
            }
          }
        />
        {errors.to && (
          <p
            style={on && { backgroundColor: "#111", color: "red" }}
            className="sendMail_error"
          >
            To is required!
          </p>
        )}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register({ required: true })}
          style={
            on && {
              backgroundColor: "#111",
              color: "white",
              border: "1px solid #111",
            }
          }
        />
        {errors.subject && (
          <p
            style={on && { backgroundColor: "#111", color: "red" }}
            className="sendMail_error"
          >
            Subject is required!
          </p>
        )}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail_message"
          ref={register({ required: true })}
          style={
            on && {
              backgroundColor: "#111",
              color: "white",
              border: "1px solid #111",
            }
          }
        />
        {errors.message && (
          <p
            style={on && { backgroundColor: "#111", color: "red" }}
            className="sendMail_error"
          >
            Message is required!
          </p>
        )}
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
