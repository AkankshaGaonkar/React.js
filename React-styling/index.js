//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import reactdom from "react-dom";

const date = new Date(2022, 9, 8, 19);
const currenttime = date.getHours();

let greeting;
const customstyle = {
  color: ""
}

if (currenttime < 12) {
  greeting = "Good Morning";
  customstyle.color = "red";
} else if (currenttime < 18) {
  greeting = "Good Afternoon";
  customstyle.color = "green";
} else {
  greeting = "Good Night";
  customstyle.color = "blue";
}
reactdom.render(
  <h1 className="heading" style={customstyle}>{greeting}</h1>,
  document.getElementById("root")
);
