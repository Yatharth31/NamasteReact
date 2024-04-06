/*
    Creating children inside the parent element

    <div id="parent">
        <div id="child">
            <h1>Hello World From React!</h1>
        </div>
    </div>

    React Element(Object) => HTML(Browser Understands)
    children div is again an object!

    
const parent = React.createElement("div", { id: "parent" });
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", {}, "Hello World From React!")
  )
);

console.log(heading); // This will print the object of the heading element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/
/*
    Passing siblings inside the parent element
    pass an array
    <div id="parent">
        <div id="child1">
            <h1>Hello World From React!</h1>
        </div>
        <div id="child2">
            <h1>Hello World From React!</h1>
        </div>
    </div>

    const parent = React.createElement("div", { id: "parent" });
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("h1", {}, "Hello World From Child!"),React.createElement("h1", {}, "Hello World From Sibling!")]
  )
);

console.log(heading); // This will print the object of the heading element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

This throws an error of keys

*/

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" });
const heading = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "Hello World From Child!"),
    React.createElement("h1", {}, "Hello World From Sibling!"),
  ]),React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "Hello World From Child!"),
    React.createElement("h1", {}, "Hello World From Sibling!"),
  ])]
);

console.log(heading); // This will print the object of the heading element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// React Elements are JS objects, which has props and children.
// React Elements are immutable, once created, they can't be changed.
// React Elements are lightweight, they are cheap to create.
// React Elements are plain objects, and are cheap to create.
