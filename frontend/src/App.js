import { Box, Grid, Typography } from "@mui/material";
import React, {useState, useEffect} from "react";
import { createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";
import { muiTheme } from './mui_theme';
import NavBar from "./components/Navigation"
import {socket} from './socket'
import {DisplayModals} from "./Modals"
import ChargesPage from "./pages/charges"
import PersonalInfoPage from './pages/personalInfo'
import HearingsPage from "./pages/hearings";

//? MATERIAL UI 
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

//? REDUX STORE
import { restoreUser } from "./store/user";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const theme = createTheme(muiTheme)
  const loggedInUser = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState()

  const initialLoad = async() => {
    // setIsLoaded(true)
    await dispatch(restoreUser())
    setIsLoaded(true)

  }

  useEffect(()=>{
    if(isLoaded === false){
      initialLoad()
      return
    }
  },[])

  useEffect(()=>{
    // TODO Update This 
    if(loggedInUser.username == null){
      setIsLoggedIn(false)
      setIsLoaded(true)
    }
    if(loggedInUser.username != null){
      setIsLoggedIn(true)
      setIsLoaded(true)
    }
  },[loggedInUser])

  return (
    <ThemeProvider theme={theme}>
      {
        isLoaded ?
        <Box>
          <NavBar />
          <Routes>
            <Route path="/*" element={<HomePage/>}/>
            <Route path="/hearings" element={<HearingsPage/>}/>
            <Route path="/charges" element={<ChargesPage/>}/>
            <Route path="/personal-info" element={<PersonalInfoPage/>}/>
          </Routes>
          <DisplayModals/>
        </Box>
        :
          null
      }
    </ThemeProvider>
  );
}

export default App;
