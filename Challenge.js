//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import reactdom from "react-dom";

const name = "Akanksha";
//const year = "2022";
const currentDate = new Date();
const year = currentDate.getFullYear();

reactdom.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
