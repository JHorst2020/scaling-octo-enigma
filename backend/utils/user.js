const User = require("../models/Users")
const {ObjectId} = require("bson")
const bcrypt = require("bcryptjs");
const {generateAccessToken, generateRefreshToken} = require("./token")


const createAdminUser = async() => {
    const adminUserExists = await User.countDocuments({username:process.env.ADMIN_USERNAME})
    if(adminUserExists > 0){
        return
    }
    const hashedPW = bcrypt.hashSync(process.env.ADMIN_PASSWORD)
    const refreshToken = generateRefreshToken({
        username:process.env.ADMIN_USERNAME,
        email:process.env.ADMIN_EMAIL,
        cellphone:process.env.ADMIN_CELLPHONE,
        phone2:process.env.ADMIN_PHONE2,
        firstName:process.env.ADMIN_FIRSTNAME,
        lastName:process.env.ADMIN_LASTNAME,
        permissions:{
            role:9
        }
    })
    await User.create({
        username:process.env.ADMIN_USERNAME,
        email:process.env.ADMIN_EMAIL,
        password:hashedPW,
        cellphone:process.env.ADMIN_CELLPHONE,
        phone2:process.env.ADMIN_PHONE2,
        firstName:process.env.ADMIN_FIRSTNAME,
        lastName:process.env.ADMIN_LASTNAME,
        refreshToken:refreshToken,
        permissions:{
            role:9
        }
    })
}

module.exports = {createAdminUser}