import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import Training from "../pages/Training/Training";
import UserProfile from "../pages/UserProfile/UserProfile";
import Chat from "../pages/Chat/Chat";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={ <Dashboard/>} />
      <Route path="/train-me" element={    <Training/>} />
      <Route path="/user-profile" element={     <UserProfile/>} />
      <Route path="/chat" element={    <Chat/>} />
     
    

    </>
  )
);
