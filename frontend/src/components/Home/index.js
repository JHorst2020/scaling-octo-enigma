import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

//? MATERIAL UI
import { Paper, Button, Grid, Typography, Collapse, TextField, Dialog, Checkbox, FormControlLabel, Link, Select, MenuItem, Popover, List, ListItemButton, ListItemIcon, Box, Icon, SvgIcon, Backdrop, CircularProgress, FormControl} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//? REDUX STORE
import {
    testfx,
    logoutUser
} from "../../store/user"
import {findPotentialWarrants} from "../../store/warrant"

import Wizard from "../../assets/mugshots/wizard.png"
import Arrest1 from "../../assets/mugshots/zahi-rashid-2018-01-04.jpeg"
import Arrest2 from "../../assets/mugshots/zahi-rashid-2018-11-29.jpeg"
import Arrest3 from "../../assets/mugshots/zahi-rashid-2021-04-28.jpeg"
import Arrest4 from "../../assets/mugshots/zahi-rashid-2019-06-06.jpeg"
import Arrest5 from "../../assets/mugshots/zahi-rashid-2015-04-30.jpeg"
const HomeComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedInUser = useSelector(state => state.user)
    const warrants = useSelector(state=>state?.warrants?.warrants)

    const [activeWarrants, setActiveWarrants] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const initialLoad = async() => {
        if(warrants == null){
            await dispatch(findPotentialWarrants())
        }
    }

    useEffect(()=>{
        initialLoad()
    },[])

    useEffect(()=>{
        try{
            if(warrants.length > 0){
                setActiveWarrants(true)
            }
        }catch(e){
        }
    },[warrants])

    const handleClickPicture = (photo) => {
        const urls = {
            wizard:"https://mugshotsearch.net/Search/Rashid/Zahi/",
            arrest1:"https://archive.is/GGQya",
            arrest2:"https://archive.is/zmr0d",
            arrest3:"https://archive.is/AhJku",
            arrest4:"https://archive.is/Znslm",
            arrest5:"https://archive.is/qVRvn"
        }
        window.open(urls[photo],"_blank")
    }


    return(
        <Grid container sx={{background:"black"}}>
            <Grid item xs={12} sx={{pb:2}}>
                {/* <h5>Home Componenet</h5> */}
                {
                    activeWarrants == true ? 
                    <Grid container item xs={12} sx={{background:"red", p:2}}>
                        <Grid item xs={12}>
                            <Typography variant='h6' align='center' sx={{color:"white"}}>WARNING!</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{color:"white"}}>Public records indicate possible active warrants:</Typography>
                        </Grid>

                        {
                            Array.isArray(warrants) ? 
                            warrants.map((ele)=>{
                                return(
                                    <Grid item xs={12}>
                                        <Typography sx={{color:"white"}}>● {ele}</Typography>
                                    </Grid>
                                )
                            })
                            : null
                        }
                        <Grid container item xs={12} justifyContent='center'>
                            <Grid item xs="auto">
                                <Button variant='contained' onClick={()=>setOpenModal(!openModal)}>Learn More</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    : null
                }
            </Grid>
            <Grid container item xs={12} justifyContent='center' >
                <Box component={Grid} display={{xs:"none", md:"block"}}>
                    <ImageList sx={{width:800, maxWidth:"100vw", height:800}} cols={3} rowHeight={164}>
                        <ImageListItem key="zahi-rashid-wizard" sx={{cursor:"pointer"}} onClick={()=>handleClickPicture("wizard")}>
                                <img src={`${Wizard}?w=164&h=164&fit=crop&auto=format`} srcSet={`${Wizard}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt="Zahi Rashid Wizard Stalker"/>
                        </ImageListItem>
                        <ImageListItem key="zahi-rashid-wizard2" sx={{cursor:"pointer"}} onClick={()=>handleClickPicture("arrest1")}>
                                <img src={`${Arrest1}?w=164&h=164&fit=crop&auto=format`} srcSet={`${Arrest1}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt="Zahi Rashid Mugshot 1 Stalker"/>
                        </ImageListItem>
                        <ImageListItem key="zahi-rashid-wizard3" sx={{cursor:"pointer"}} onClick={()=>handleClickPicture("arrest2")}>
                                <img src={`${Arrest2}?w=164&h=164&fit=crop&auto=format`} srcSet={`${Arrest2}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt="Zahi Rashid Mugshot 2 Stalker"/>
                        </ImageListItem>
                        <ImageListItem key="zahi-rashid-wizard4" sx={{cursor:"pointer"}} onClick={()=>handleClickPicture("arrest3")}>
                                <img src={`${Arrest3}?w=164&h=164&fit=crop&auto=format`} srcSet={`${Arrest3}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt="Zahi Rashid Mugshot 3 Stalker"/>
                        </ImageListItem>
                        <ImageListItem key="zahi-rashid-wizard5" sx={{cursor:"pointer"}} onClick={()=>handleClickPicture("arrest4")}>
                                <img src={`${Arrest4}?w=164&h=164&fit=crop&auto=format`} srcSet={`${Arrest4}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt="Zahi Rashid Mugshot 4 Stalker"/>
                        </ImageListItem>
                        <ImageListItem key="zahi-rashid-wizard6" sx={{cursor:"pointer"}} onClick={()=>handleClickPicture("arrest5")}>
                                <img src={`${Arrest5}?w=164&h=164&fit=crop&auto=format`} srcSet={`${Arrest5}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt="Zahi Rashid Mugshot 5 Stalker"/>
                        </ImageListItem>
                        
                    </ImageList>
                </Box>
                <Box component={Grid} display={{xs:"block", md:"none"}}>
                    <Grid container sx={{px:1}}>
                    <Grid item xs={6} sx={{p:1, cursor:"pointer"}} onClick={()=>handleClickPicture("wizard")} >
                        <Box component="img" src={Wizard} alt="Zahi Rashid Wizard Stalker" sx={{height:"auto", width:"100%"}}/>
                    </Grid>
                    <Grid item xs={6} sx={{p:1, cursor:"pointer"}} onClick={()=>handleClickPicture("arrest1")}>
                        <Box component="img" src={Arrest1} alt="Zahi Rashid Wizard" sx={{height:"auto", width:"100%"}}/>
                    </Grid>
                    <Grid item xs={6} sx={{p:1, cursor:"pointer"}} onClick={()=>handleClickPicture("arrest2")}>
                        <Box component="img" src={Arrest2} alt="Zahi Rashid Wizard" sx={{height:"auto", width:"100%"}}/>
                    </Grid>
                    <Grid item xs={6} sx={{p:1, cursor:"pointer"}} onClick={()=>handleClickPicture("arrest3")}>
                        <Box component="img" src={Arrest3} alt="Zahi Rashid Wizard" sx={{height:"auto", width:"100%"}}/>
                    </Grid>
                    <Grid item xs={6} sx={{p:1, cursor:"pointer"}} onClick={()=>handleClickPicture("arrest4")}>
                        <Box component="img" src={Arrest4} alt="Zahi Rashid Wizard" sx={{height:"auto", width:"100%"}}/>
                    </Grid>
                    <Grid item xs={6} sx={{p:1, cursor:"pointer"}} onClick={()=>handleClickPicture("arrest5")}>
                        <Box component="img" src={Arrest5} alt="Zahi Rashid Wizard" sx={{height:"auto", width:"100%"}}/>
                    </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Dialog open={openModal} maxWidth="sm" onClose={()=>setOpenModal(false)}>
                <Grid container item xs={12} sx={{p:2}}>
                    <Grid item xs={12} sx={{pb:2}}>
                        <Typography align='center' variant='h5'>RESOURCES</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>● Warrant information gathered from: <Link href="https://minnesota.staterecords.org/" target="_blank" rel="noreferrer">StateRecords.org</Link></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>● Submit information to Sheriffs Dept:  <Link href="https://dps.mn.gov/divisions/bca/bca-divisions/administrative/Pages/county-sheriff-offices.aspx" target="_blank" rel="noreferrer">Bureau of Criminal Apprehension</Link></Typography>
                    </Grid>
                </Grid>
            </Dialog>
        </Grid>
    )
}

export default HomeComponent