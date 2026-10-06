import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(() => {
    const savedLogin = localStorage.getItem("loggedIn");

    return savedLogin === "true";
  });

  const handleLogin = (value) => {
    setLoggedIn(value);
    localStorage.setItem("loggedIn", value);
  };

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn: handleLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
