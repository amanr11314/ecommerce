import React, { Fragment, useContext, useEffect } from "react";

import Header from "../components/layouts/Header/Header";
import LandingPage from "../components/layouts/LandingPage/LandingPage";
import GlobalContext from "../context/global-context";

export default function Medium() {
  const context = useContext(GlobalContext);
  useEffect(() => {
    //only load user if has token
    if (context.auth.token) {
      context.loadUser();
    }
  }, []);
  return (
    <Fragment>
      <Header />
      <LandingPage />
    </Fragment>
  );
}
