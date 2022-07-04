import { FC, useContext, useId, useMemo } from 'react';
import { Paper, List, Typography } from '@mui/material';
import { IEntry, TEntryStatus } from 'src/interfaces';
import { EntryCard } from './';
import { EntriesContext } from 'src/context/entries';
import { getEntriesByStatus } from 'src/utils';


interface IProps {
    status: TEntryStatus
}

export const EntryList:FC<IProps> = ({status}) => {
    const {entries} = useContext(EntriesContext)

    const entriesArr = useMemo(() => getEntriesByStatus(status, entries), [status, entries]) 

    const reactId = useId()

  return (
    //drop
    
        <Paper sx={{height: 'calc(100% - 80px)', overflowY:'scroll', '&::-webkit-scrollbar': { display: 'none' },background: 'transparent'}}>
            <List sx={{opacity: 1,marginBottom: '20px'}} >
                {
                    !!entriesArr.length ? (
                                    entriesArr.map((entry, i) => (<EntryCard key={reactId + i} entry={entry}/>))
                                    ) : (
                                        <Typography sx={{textAlign: 'center'}}>No hay tareas con el estado {status}</Typography>
                                    )
                }
            </List>
        </Paper>

  )
}