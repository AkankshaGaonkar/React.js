//var React = require("react");
import React from "react";
//var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
const name ="Akanksha";
const surname ="Gaonkar";

//Using react render method inside root
//ReactDOM.render(WHAT TO SHOW,WHERE TO SHOW IT);
ReactDOM.render(
  <div>
    <h1>Hello {name + " "+surname}!</h1>
    <p>This is a paragraph of {8+1} words.Your lucky no is {Math.floor(Math.random()*10)}</p>
  </div>,
  document.getElementById("root")
);

//Below is three lines of code using pure js

var h1 = document.createElement("h1");
h1.innerHTML = "Hello Ashu";
document.getElementById("root").appendChild(h1);


import React from "react";
import reactdom from "react-dom";

reactdom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      <strong>My Favourite Food</strong>
    </h1>
    <ul>
      <li>
        <strong>Fruits</strong>
        <img
          className="food"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh5LSN6dk17RIhp1NKFP8zZ_XC7zulFcIUtg38MYQJg&s"
        />
      </li>
      <li>
        <strong>Chocolates</strong>
      </li>
      <li>
        <strong>Nuts</strong>
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);


//var React = require("react");
import React from "react";
//var ReactDOM = require("react-dom");
import ReactDOM from "react-dom";
const name = "Akanksha";
const surname = "Gaonkar";

//Using react render method inside root
//ReactDOM.render(WHAT TO SHOW,WHERE TO SHOW IT);
ReactDOM.render(
  <div>
    <h1>Hello {name + " " + surname}!</h1>
    <p>
      This is a paragraph of {8 + 1} words.Your lucky no is{" "}
      {Math.floor(Math.random() * 10)}
    </p>
  </div>,
  document.getElementById("root")
);

//Below is three lines of code using pure js

var h1 = document.createElement("h1");
h1.innerHTML = "Hello Ashu";
document.getElementById("root").appendChild(h1);



