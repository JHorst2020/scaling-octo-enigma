import { Dialog, Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"


import { updateModalsStore } from "./store/99_modals"



export const DisplayModals = () => {
    const dispatch = useDispatch()
    const locations__create = useSelector(state => state?.modals?.locations__create)

    const handleOnClose = async(modal) => {
        await dispatch(updateModalsStore(modal))
    }

    return(
        <Grid container>
            {/* LOCATIONS */}
            <Dialog maxWidth="sm" fullWidth open={locations__create != null} onClose={()=>handleOnClose("locations__create")}>
            </Dialog>
        </Grid>
    )
}