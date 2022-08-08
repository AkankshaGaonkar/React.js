import React from "react";
import reactdom from "react-dom";

const picture = "https://picsum.photos/seed/picsum/200/300";

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
          alt="fruits"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzh5LSN6dk17RIhp1NKFP8zZ_XC7zulFcIUtg38MYQJg&s"
        />
      </li>
      <li>
        <strong>Chocolates</strong>
        <img src={picture + "?grayscale"} />
      </li>
      <li>
        <strong>Nuts</strong>
      </li>
    </ul>
  </div>,
  document.getElementById("root")
);
