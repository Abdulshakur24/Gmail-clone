import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected, on }) {
  return (
    <div className={`sidebar_option ${selected && "sidebar--active"}`}>
      <Icon style={on ? { color: "white" } : {}} />
      <h3 style={on ? { color: "white" } : {}}>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
