import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//? COMPONENTS
import HomeComponent from "../components/Home";

//? MATERIAL UI
import { Grid } from "@mui/material";

//? REDUX STORE


const HomePage = (props) => {
    // const history = useHistory()
    const dispatch = useDispatch()
    
    const location = useLocation()

    useEffect(()=>{
       
    },[])

    


    return(
        <Grid container item xs={12}  >
            <HomeComponent />
        </Grid>
        )

}

export default HomePage