import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { Paper, Button, Grid, Typography, Collapse, TextField, Dialog, Checkbox, FormControlLabel, Link, Select, MenuItem, Popover, List, ListItemButton, ListItemIcon, Box, Icon, SvgIcon, Backdrop, CircularProgress, FormControl} from "@mui/material";

import Hearings from "../../assets/overview/zahi-rashid-hearings.png"

const HearingsComponent = () => {
    return(
        <Grid container item xs={12}>
            <Grid container item xs={12} sx={{px:2, pt:1}}>
                <Grid item xs={12}>
                    <Typography align='center'>The following is a screen capture of the Minnesota Judicial Branch website as of February 2023.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align='center'>To verify the authenticity, please click the link below. </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={12} justifyContent='center' sx={{pb:2}}>
                <Grid item xs="auto">
                    <Link href="https://publicaccess.courts.state.mn.us/" target="_blank" rel="noreferrer">Search Case Records</Link>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Typography align="center" variant='h5'>SCREEN CAPTURE</Typography>
            </Grid>
            <Box component='img' src={Hearings} sx={{width:"100%"}} />
        </Grid>
    )
}

export default HearingsComponent