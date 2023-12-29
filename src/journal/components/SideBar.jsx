import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" //temporary
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawerPaper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Carlos Vega
          </Typography>
        </Toolbar>

        <List>
          {["enero", "febrero", "marzo", "abril"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'kjdslfkaj lkdflksdf lkjfkad fk jkdjflfj lljflkjflkdf ljfkkjdf ljfglkjdfkgfg lkfkf lmflklk'}/>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
