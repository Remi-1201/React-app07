import { atom } from "recoil";

// 7-5 global State
export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
