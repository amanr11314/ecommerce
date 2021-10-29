import React from "react";
import { render } from "react-dom";
import Medium from "./Medium";
import GlobalState from "../context/GlobalState";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
export default function App() {
  return (
    <GlobalState>
      <AlertProvider template={AlertTemplate}>
        <Medium />
      </AlertProvider>
    </GlobalState>
  );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
