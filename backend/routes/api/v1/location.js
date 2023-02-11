const express = require("express")
const asyncHandler = require("express-async-handler");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const User = require("../../../models/Users")
const Location = require("../../../models/Locations")
const router = express.Router();

const jwt = require("jsonwebtoken");
const {
    authenticateToken,
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken
} = require("../../../utils/token")

//* CREATE NEW LOCATION
router.post("/",authenticateToken, asyncHandler(async(req, res)=>{
    console.log(req.body)
    const newLocation = await Location.create(req.body)
    return res.json(newLocation)
}))

module.exports = router