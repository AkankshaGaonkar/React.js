import React from "react";

function Heading() {
  const date = new Date(2022, 9, 8, 19);
  const currenttime = date.getHours();

  let greeting;
  const customstyle = {
    color: ""
  };

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
  return (
    <h1 className="heading" style={customstyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
