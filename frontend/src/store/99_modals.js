const SET_LOCATIONS_MODAL__CREATE = "./2_locations/SET_LOCATIONS_MODAL__CREATE"


const setLocations__create = (locations__create) => ({
    type:SET_LOCATIONS_MODAL__CREATE,
    locations__create
})


export const updateModalsStore = (field, value) => async(dispatch) => {
    const functionMapping = {
        locations__create:setLocations__create
    }
    const currFunction = functionMapping[field]
    if(currFunction != null){
        await dispatch(currFunction(value))
    }
}


const initialState = {
    locations__create:null,
}

const modalsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LOCATIONS_MODAL__CREATE: {
            return {
                ...state,
                locations__create: action.locations__create
            }
        }
        
        default:
            return state;
    }
}

export default modalsReducer