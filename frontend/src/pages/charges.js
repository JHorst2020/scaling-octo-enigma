import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//? COMPONENTS
import HomeComponent from "../components/Home";
import ChargesComponent from "../components/Charges";
//? MATERIAL UI
import { Grid } from "@mui/material";

//? REDUX STORE


const ChargesPage = (props) => {
    // const history = useHistory()
    const dispatch = useDispatch()
    
    const location = useLocation()

    useEffect(()=>{
       
    },[])

    


    return(
        <Grid container item xs={12}  >
            <ChargesComponent />
        </Grid>
        )

}

export default ChargesPage