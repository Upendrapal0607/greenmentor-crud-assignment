import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage.jsx";
import { RegisterAndLogin } from "../Pages/RegisterAndLogin.jsx";

import TaskList from "../Components/Task.jsx";
import { Profile } from "../Components/Profile.jsx";
import { useSelector } from "react-redux";

export const MainRoute = () => {
  const { isAuth } = useSelector((state) => state.userReducer);
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<RegisterAndLogin />} />
        <Route
          path="/task"
          element={isAuth ? <TaskList /> : <RegisterAndLogin />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};
