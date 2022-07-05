import { NextPage } from 'next'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Layout } from '../components/layouts/Layout';
import { useContext, useMemo } from 'react';
import { EntriesContext } from '../context/entries/EntriesContext';
import { EntryList } from 'src/components/ui'
import { TEntryStatus } from 'src/interfaces';


const HomePage:NextPage = () => {

    const {entries} = useContext(EntriesContext)

    const getEntries = useMemo(() => (status: TEntryStatus) => entries.filter((it,i) => it.status === status) , [entries])

    console.log(entries.filter((it,i) => it.status === 'pending'));


  return (
      <Layout title='Home - Open Jira'>
        <Grid container spacing={4} mt={1} sx={{paddingLeft: '10px', paddingRight: '10px'}}>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 120px)', padding: 1}}>
              <CardHeader title='pendientes' sx={{textAlign: 'center'}}/>
              
                {/* aggregar una nueva tarea */}
                
                {/* listar el lado de las entradas */}
                <EntryList status='pending' task={getEntries('pending')}/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 120px)',padding: 1}}>
              <CardHeader title='en progreso' sx={{textAlign: 'center',}}/>
              <EntryList status='in-progres' task={getEntries('in-progres')}/>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{height: 'calc(100vh - 120px)', padding: 1}}>
              <CardHeader title='terminadas' sx={{textAlign: 'center'}}/>
              <EntryList status='finished' task={getEntries('finished')}/>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    
  )
}


export default HomePage;