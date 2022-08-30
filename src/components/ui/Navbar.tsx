import { useContext } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {UIContext} from 'src/context/ui';
import NextLink from 'next/link';

export const Navbar = () => {
  const {openSideMenu} = useContext(UIContext)
  
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
            <IconButton size='large' edge='end' test-id='btnBurger' onClick={openSideMenu}>
                <MenuIcon htmlColor='#919191'/>
            </IconButton>
            <NextLink href={'/'} passHref>
              <Link underline='none' color={'white'} ><Typography variant='h6'>Open Jira</Typography></Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
