import { DragEvent, FC, useContext, useId, useMemo } from 'react';
import { Paper, List, Typography } from '@mui/material';
import { TEntryStatus } from 'src/interfaces';
import { EntryCard } from './';
import { EntriesContext, UIContext } from 'src/context';
import { getEntriesByStatus } from 'src/utils';

//css
import styles from './EntryList.module.css'


interface IProps {
    status: TEntryStatus
}

export const EntryList:FC<IProps> = ({status}) => {
    const reactId = useId()
    const {entries, onUpdateEntry} = useContext(EntriesContext)
    const {isDragging, setEndDragging} = useContext(UIContext)

    const entriesArr = useMemo(() => getEntriesByStatus(status, entries), [status, entries]) 

    const onDrop = (e:DragEvent<HTMLDivElement>) => {
    
        const id = e.dataTransfer.getData('id_entry')

        const entry = entries.find(entry => entry._id === id);
        if(!entry) return
        entry.status = status
        onUpdateEntry(entry)
        setEndDragging()
    }

    const allowDrop = (e:DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }



  return (
    //drop
    <div onDrop={onDrop} onDragOver={allowDrop} className={isDragging ?  styles.dragging : ''}>
        <Paper sx={{height: 'calc(100vh - 80px)', overflowY:'scroll', '&::-webkit-scrollbar': { display: 'none' },background: 'transparent'}}>
            <List sx={{opacity: isDragging ? 0.2 : 1,marginBottom: '20px', transition: 'all .3s'}} >
                {
                    !!entriesArr.length ? (
                                    entriesArr.map((entry, i) => (<EntryCard key={reactId + i} entry={entry}/>))
                                    ) : (
                                        <Typography sx={{textAlign: 'center'}}>No hay tareas con el estado {status}</Typography>
                                    )
                }
            </List>
        </Paper>
    </div>

  )
}