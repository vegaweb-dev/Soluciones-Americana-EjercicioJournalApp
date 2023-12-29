import { Box } from "@mui/material"    /*en la guia > import {Box} from "@muy/system bitte suchst warum system statt material wie hier"*/ 

const drawerWidth=240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
            {/* Navbar drawerWidth*/}
            {/* Sidebar drawerWidth */}
            <Box component='main' sx={{flexGrow:1,p:3}}>
                {/* Tolbar */}
                {children}
                
            </Box>

    </Box>
  )
}

