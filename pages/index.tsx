import { Typography } from '@mui/material';
import { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout';
import { UIProvider } from '../context/ui/UIProvider';


const HomePage:NextPage = () => {
  return (

    <UIProvider>
      <Layout>
        <Typography variant='h1'>Hola mundo</Typography>
      </Layout>
    </UIProvider>
  )
}


export default HomePage;