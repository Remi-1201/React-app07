// 7-2 {createContext} will make things globally
import React, { createContext } from "react";

// 7-2 There's Provider inside UserContext
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "Usako";
  return (
    // 7-2 Make it globally with [value={{}}]
    <UserContext.Provider value={{ contextName }}>
      {/* 7-2 Everythings will be placed inside <UserContext.Provider> with {Children} */}
      {children}
    </UserContext.Provider>
  );
};
