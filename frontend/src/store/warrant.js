const SET_WARRANT_INFO = "./warrants/SET_WARRANT_INFO"


const setWarrantInfo = (warrants) => ({
    type:SET_WARRANT_INFO,
    warrants
})


export const findPotentialWarrants = () => async(dispatch) => {
    try{
        if(process.env.REACT_APP_TEST == 1){
            console.log("equals 1")
            await dispatch(setWarrantInfo(["MINNEAPOLIS, MN", "MINNEAPOLIS, MN", "MINNEAPOLIS, MN"]))
            return
        }
    }catch(e){}
    const warrantInfo = await fetch("https://search.staterecords.org/?firstName=Zahi&lastName=Rashid&state=MN",{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    })
    const res = await warrantInfo.json()
    try{
        if(res.reportsCount == 0){
            await dispatch(setWarrantInfo([]))
            return
        }
        const reports = res.reports
        const reportValues = Object.values(reports)
        let warrantInfo = reportValues.map((ele)=>{
            let city = ""
            let state = "MN"
            let string = ""
            if(ele.addresses[0] != null){
                city=ele.addresses[0].city
            }
            if(city != ""){
                return `${city}, ${state}`
            }
            return `${state}`
        })
        await dispatch(setWarrantInfo(warrantInfo))
    }catch(e){}

}


const initialState = {
    warrants:null,
}

const warrantReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_WARRANT_INFO: {
            return {
                ...state,
                warrants: action.warrants
            }
        }
        
        default:
            return state;
    }
}

export default warrantReducer