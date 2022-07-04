import { NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Layout } from '../components/layouts/Layout';
import { EntryList } from 'src/components/ui'
import { NewEntry } from '../components/ui/NewEntry';

const HomePage:NextPage = () => {

  return (
      <Layout title='Home - Open Jira'>
        <Grid container spacing={4} mt={1} sx={{paddingLeft: '10px', paddingRight: '10px'}}>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 120px)', padding: 1}}>
              <CardHeader title='Pendientes' sx={{textAlign: 'center'}}/>
              
                {/* aggregar una nueva tarea */}
                <NewEntry/>
                {/* listar el lado de las entradas */}
                <EntryList status='pending' />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 120px)',padding: 1}}>
              <CardHeader title='En Progreso' sx={{textAlign: 'center',}}/>
              <EntryList status='in-progres' />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 120px)', padding: 1}}>
              <CardHeader title='Terminadas' sx={{textAlign: 'center'}}/>
              <EntryList status='finished' />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    
  )
}


export default HomePage;