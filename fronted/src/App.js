import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Navbar from "./commponents/header/Navbar";
import Router from "./Router";
import { RoleTypes } from "./users/roletypes";

export const GeneralContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [searchWord, setSearchWord] = useState("");
  const [roleType, setRoleType] = useState(RoleTypes.none);

  return (
    <GeneralContext.Provider
      value={{ user, searchWord, setSearchWord, roleType, setRoleType }}
    >
      <Navbar />
      <Router />
    </GeneralContext.Provider>
  );
}

export default App;
