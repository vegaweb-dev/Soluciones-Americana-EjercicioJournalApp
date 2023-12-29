import { Box } from "@mui/material"    /*en la guia > import {Box} from "@muy/system bitte suchst warum system statt material wie hier"*/ 
import NavBar from "../components/NavBar";

const drawerWidth=240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
            <NavBar drawerWidth={drawerWidth}/> {/* Navbar drawerWidth*/}
            {/* Sidebar drawerWidth */}
            <Box component='main' sx={{flexGrow:1,p:3}}>
                {/* Tolbar */}
                {children}
                
            </Box>

    </Box>
  )
}

