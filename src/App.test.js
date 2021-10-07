import SamuraiJsApp from "./App";
import React from "react";
import ReactDOM from "react-dom";

it("renders learn react link", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SamuraiJsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
