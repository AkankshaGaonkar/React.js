import React from "react";
import ReactDOM from "react-dom";

//inline stylling
ReactDOM.render(
    <h1 style={{color: "red"}}>Hi</h1>,
    document.getElementById("rooot")

);

const css = {
  color: "red",
  fontSize: "20px",
  border: "2px solid black"
};

//upadate the property
css.color="blue";

ReactDOM.render(
  <h1 style={css}>Hello World!</h1>,
  document.getElementById("root")
);
