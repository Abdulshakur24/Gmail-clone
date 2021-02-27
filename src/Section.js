import { BorderBottom } from "@material-ui/icons";
import React from "react";
import "./Section.css";

function Section({ Icon, title, color, selected, on }) {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={
        on
          ? {
              color: `${selected && color}`,
              borderBottom: `1px solid ${color}`,
            }
          : {
              borderBottom: `3px solid ${color}`,
              color: `${selected && color}`,
            }
      }
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
