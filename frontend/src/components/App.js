import React from "react";
import { render } from "react-dom";
export default function App() {
  return (
    <div>
      <span>Hello, E-commerce</span>
    </div>
  );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
