import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { Paper, Button, Grid, Typography, Collapse, TextField, Dialog, Checkbox, FormControlLabel, Link, Select, MenuItem, Popover, List, ListItemButton, ListItemIcon, Box, Icon, SvgIcon, Backdrop, CircularProgress, FormControl} from "@mui/material";

import Hearings from "../../assets/overview/zahi-rashid-hearings.png"
import PublicInfo from "../../assets/overview/public-info.png";

const PublicInfoComponent = () => {
    return(
        <Grid container item xs={12}>
            <Grid item xs={12}>
                <Typography align="center" variant='h5'>SCREEN CAPTURE OF BACKGROUND CHECK</Typography>
            </Grid>
            <Box component='img' src={PublicInfo} sx={{width:"100%"}} />
            <Grid item xs={12}>
                <Typography align="center" >Do not use any information obtained through this site to determine a person's eligibility for credit, insurance, employment, housing (tenant screening), or for any other purpose covered under the Fair Credit Reporting Act (FCRA). This site is not a consumer reporting agency and does not offer consumer reports. This site gathers information from public sources, which may not be complete, comprehensive, accurate or even up-to-date. This service is not a substitute for your own due diligence, especially if you have concerns about a person's criminal history. This site does not verify or evaluate each piece of data, and makes no warranties or guarantees about the information offered.</Typography>
            </Grid>
        </Grid>
    )
}

export default PublicInfoComponent