import { FC, useId } from 'react';
import { Paper, List, Typography } from '@mui/material';
import { IEntry, TEntryStatus } from 'src/interfaces';
import { EntryCard } from './';


interface IProps {
    status: TEntryStatus,
    task: IEntry[]
}

export const EntryList:FC<IProps> = ({status, task = []}) => {

    const reactId = useId()
    console.log(status, task);

  return (
    //drop
    <div>
        <Paper sx={{height: 'calc(100vh - 100px)', overflowY: 'scroll', background: 'transparent'}}>
            <List sx={{opacity: 1}}>
                {
                    !!task.length ? (
                                    task.map((entry, i) => (<EntryCard key={reactId + i} entry={entry}/>))
                                    ) : (
                                        <Typography sx={{textAlign: 'center'}}>No hay tareas con el estado {status}</Typography>
                                    )
                }
            </List>
        </Paper>
    </div>
  )
}