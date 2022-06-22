import { useContext, useId } from "react";
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
import { UIContext } from "context/ui";

const menuItems:string[] = ['Inbox', 'Starred', 'Send Email', 'Draft'];

export const SideBar = () => {
  //id  
  const reactID = useId()
  // context
  const {isMenuOpen, closeSideMenu} = useContext(UIContext)

  return (
    <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={closeSideMenu}
    >

    <Box sx={{width:'250px', textAlign:'center'}}>
        <Box sx={{padding:'5px 10px'}}>
            <Typography>Menu</Typography>
        </Box>
        <List>
            {
               paintMenuSideBar(reactID)
            }
        </List>
        <Divider/>
        <List>
            {
               paintMenuSideBar(reactID)
            }
        </List>
    </Box>
    </Drawer>
  )
}



const paintMenuSideBar = (reactID:string) => (
    menuItems.map((item, i) => (
        <ListItem button key={reactID + i} >
            <ListItemIcon>
                {
                    i % 2 ? <InboxIcon/> : <EmailIcon/>
                }
            </ListItemIcon>
            <ListItemText>{item}</ListItemText>
        </ListItem>
    ))
)