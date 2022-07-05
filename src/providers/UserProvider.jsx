// 7-2 {createContext} will make things globally
// 7-3 add useState
import React, { createContext, useState } from "react";

// 7-2 There's Provider inside UserContext
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  // 7-3 Add useState
  const [userInfo, setUserInfo] = useState(null);

  return (
    // 7-2 Make it globally with [value={{}}]
    // 7-3 add useState's props to [value={{}}] instead of contextName
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {/* 7-2 Everythings will be placed inside <UserContext.Provider> with {Children} */}
      {children}
    </UserContext.Provider>
  );
};
