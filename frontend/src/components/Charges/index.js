import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { Paper, Button, Grid, Typography, Collapse, TextField, Dialog, Checkbox, FormControlLabel, Link, Select, MenuItem, Popover, List, ListItemButton, ListItemIcon, Box, Icon, SvgIcon, Backdrop, CircularProgress, FormControl, Tabs, Tab} from "@mui/material";

import Charges from "../../assets/overview/zahi-rashid-cases.png"
import NoContact1 from "../../assets/overview/zahi-rashid-stalking-1.png"
import Stalking2 from "../../assets/overview/zahi-rashid-stalking-2.png"
import Stalking3 from "../../assets/overview/Zahi-Rashid-stalking-3.png"
import Stalking4 from "../../assets/overview/zahi-rashid-stalking-4.png"
import Stalking5 from "../../assets/overview/zahi-rashid-stalking-5.png"
const ChargesComponent = () => {
    const [currTab, setCurrTab] = useState(0)
    const [noContactTab, setNoContactTab] = useState(0)
    const [stalkingTab, setStalkingTab] = useState(0)

    const handleTabChange = (e, newValue) => {
        setCurrTab(newValue)
    }
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
            <Grid container item xs={12} justifyContent='center'>
                <Tabs value={currTab} onChange={handleTabChange}>
                    <Tab value={0} label="Overview" />
                    <Tab value={1} label="Stalking" />
                    <Tab value={2} label="No Contact Violation" />
                    {/* <Tab value={3} label="Overview" />
                    <Tab value={4} label="Overview" />
                    <Tab value={5} label="Overview" /> */}
                </Tabs>
            </Grid>
            {
                currTab == 0 ?
                <>
                    <Grid item xs={12}>
                        <Typography align="center" variant='h5'>SCREEN CAPTURE</Typography>
                    </Grid>
                    <Box component='img' src={Charges} sx={{width:"100%"}} />
                </>
                : null
            }
            {
                currTab == 1 ?
                <Grid container item xs={12} justifyContent='center' >
                    <Grid item xs={12} md={4} sx={{px:2, pb:2}}>
                        <Typography>Select Case</Typography>
                        <Select fullWidth value={stalkingTab} onChange={(e)=>setStalkingTab(e.target.value)}>
                            <MenuItem value={0}>Case: 82-CR-16-5402 (Felony)</MenuItem>
                            <MenuItem value={1}>Case: 27-CR-16-8290 (Gross Misdemeanor)</MenuItem>
                            <MenuItem value={2}>Case: 27-CR-16-4759 (Felony)</MenuItem>
                        </Select>
                    </Grid>
                    {
                        stalkingTab == 0 ? 
                        <Box component='img' src={Stalking2} sx={{width:"100%"}} />
                        : null
                    }
                    {
                        stalkingTab == 1 ? 
                        <Box component='img' src={Stalking3} sx={{width:"100%"}} />
                        : null
                    }
                    {
                        stalkingTab == 2 ? 
                        <Box component='img' src={Stalking4} sx={{width:"100%"}} />
                        : null
                    }
                </Grid>
                : null
            }
            {
                currTab == 2 ?
                <Grid container item xs={12} justifyContent='center' >
                    <Grid item xs={12} md={4} sx={{px:2, pb:2}}>
                        <Typography>Select Case</Typography>
                        <Select fullWidth value={noContactTab} onChange={(e)=>setNoContactTab(e.target.value)}>
                            <MenuItem value={0}>Case: 82-CR-19-1548 (Felony)</MenuItem>
                            <MenuItem value={1}>Case: 27-CR-16-4759 (Felony)</MenuItem>
                            <MenuItem value={2}>Case: 02-CR-15-2212 (Misdemeanor)</MenuItem>
                        </Select>
                    </Grid>
                    {
                        noContactTab == 0 ? 
                        <Box component='img' src={NoContact1} sx={{width:"100%"}} />
                        : null
                    }
                    {
                        noContactTab == 1 ? 
                        <Box component='img' src={Stalking4} sx={{width:"100%"}} />
                        : null
                    }
                    {
                        noContactTab == 2 ? 
                        <Box component='img' src={Stalking5} sx={{width:"100%"}} />
                        : null
                    }
                </Grid>
                : null
            }
        </Grid>
    )
}

export default ChargesComponent