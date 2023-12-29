import { Box, Toolbar } from "@mui/material"    /*en la guia > import {Box} from "@muy/system bitte suchst warum system statt material wie hier"*/ 
import NavBar from "../components/NavBar";
import {SideBar} from "../components/SideBar";

const drawerWidth=240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
            <NavBar drawerWidth={drawerWidth}/> {/* Navbar drawerWidth*/}
            {/* Sidebar drawerWidth */}<SideBar drawerWidth={drawerWidth}/>
            <Box component='main' sx={{flexGrow:1,p:3}}>
                {/* Tolbar */}<Toolbar/>
                {children}
                
            </Box>

    </Box>
  )
}

