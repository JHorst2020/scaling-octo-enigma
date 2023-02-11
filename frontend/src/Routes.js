import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, Route, RouterProvider,} from "react-router-dom";
import { restoreUser } from "./store/user";

//? PAGES
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";
import { Grid, Typography } from "@mui/material";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage />,
        children:[
            {
                path:"login",
                element:<LoginPage/>
            },
            {
                path:"signup",
                element:<SignUpPage/>
            },
        ]
    }
])