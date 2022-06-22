import { jsx } from '@emotion/react';
import { Box } from '@mui/material'
import Head from 'next/head'
import { FC } from 'react'
import { Navbar, SideBar } from '../ui';


interface IProps {
    title?: string;
    children: JSX.Element| JSX.Element[]
}

export const Layout:FC<IProps> = ({title = 'Open Jira App', children}) => {
  return (
    <Box sx={{flexGrow:1}}> {/* //sx is like style prop with difference that sx can access theme application   */}
        <Head>
            <title>{title}</title>

        </Head>
        <Navbar/>
        <SideBar/>
        <Box sx={{paddingTop: '10px 20px'}}>
            {children}
        </Box>
    </Box>
  )
}
