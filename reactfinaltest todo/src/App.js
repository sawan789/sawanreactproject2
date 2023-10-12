import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Userwithredux from "./features/components/User/Userwithredux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/components/Home";
import Todo from "./features/components/todo/todo";
import Navbar from "./features/components/Navbar";
import Navbox from "./features/components/Navbar";
import Login from "./features/components/Login";
import Protected from "./features/components/Protected";
import Logout from "./features/components/Logout";

function App() {
  return (
    <div className="App">
      <div>
        <Navbox />
      </div>
      <div>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Protected Component={Home} />}></Route>
          <Route path="/todo" element={<Protected Component={Todo} />}></Route>
          <Route
            path="/user"
            element={<Protected Component={Userwithredux} />}
          ></Route>
          <Route
            path="/logout"
            element={<Protected Component={Logout} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
