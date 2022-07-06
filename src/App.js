import React from "react";
import "./styles.css";
import { Router } from "./router/Router";
// 7-2 import {UserProvider} for globalState
import { UserProvider } from "./providers/UserProvider";
// 7-5 import RecoilRoot
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
