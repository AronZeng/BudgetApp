import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserPicker from "./UserPicker";
import User from "./User";
import NotFound from "./NotFound";
import NavBar from "./Navbar";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { GlobalHotKeys } from "react-hotkeys";
import Income from "./Income";
import Spending from "./Spending";

const Router = () => {
  //   const NAV_SHORTCUTS = {
  //     TOGGLE_JUMP: ["ctrl+j", "command+j"]
  //   };

  //   const TOGGLE_JUMP = () => {
  //     console.log("Test");
  //   };

  return (
    <>
      {/* <GlobalHotKeys keyMap={NAV_SHORTCUTS} handlers={{ TOGGLE_JUMP }}> */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={UserPicker} />
            <Route exact path="/user/income" component={Income} />
            <Route exact path="/user/spending" component={Spending} />
            <Route exact path="/user/:userName" component={User} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      {/* </GlobalHotKeys> */}
    </>
  );
};

export default Router;
