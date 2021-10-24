import React, { Fragment } from "react";
import { render } from "react-dom";
import Header from "./layouts/Header/Header";
import LandingPage from "./layouts/LandingPage/LandingPage";
export default function App() {
  return (
    <Fragment>
      <Header />
      <LandingPage />
    </Fragment>
  );
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);
