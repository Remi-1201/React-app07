import React from "react";
import "./styles.css";
import { Router } from "./router/Router";
// 7-2 import {UserProvider} for globalState
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
