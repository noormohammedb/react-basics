import React from "react";
import ReactDom from "react-dom";

function HelloWorld() {
   return <p>Hello World!</p>;
}

ReactDom.render(<HelloWorld />, document.getElementById("root"));
