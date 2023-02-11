const mongoose = require("mongoose")

const ChildrenSchema = new mongoose.Schema({
    childUUID:{
        type:String,
        default:null
    }
})

const Location = new mongoose.Schema({
    name:{
        type:String,
        default:null
    },
    nickname:{
        type:String,
        default:null
    },
    category:{
        type:String,
        default:null
    },
    isRoot:{
        type:Boolean,
        default:false
    },
    isDolcessa:{
        type:Boolean,
        default:true
    },
    relatedCustomer:{
        type:Boolean,
        default:false
    },
    address1:{
        type:String,
        default:null
    },
    address2:{
        type:String,
        default:null
    },
    address3:{
        type:String,
        default:null
    },
    city:{
        type:String,
        default:null
    },
    state:{
        type:String,
        default:null
    },
    zipcode:{
        type:String,
        default:null
    },
    country:{
        type:String,
        default:null
    },
    parentUUID:{
        type:String,
        default:null
    },
    children:[ChildrenSchema],
    isActive:{
        type:Boolean,
        default:true
    },
    canAcceptInventory:{
        type:Boolean,
        default:true
    },
    canSupplyInventory:{
        type:Boolean,
        default:true
    },
    isReferenceOnly:{
        type:Boolean,
        default:true
    }
    
})

module.exports = mongoose.model("Location", Location)