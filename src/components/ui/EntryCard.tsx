import { DragEvent, FC, useContext } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { IEntry } from '../../interfaces/entry';
import { UIContext } from 'src/context/ui';
import { useRouter } from 'next/router';
import { dateFunctions } from 'src/utils';

interface IProps {
    entry: IEntry
}


export const EntryCard:FC<IProps> = ({entry}) => {
  const router = useRouter();
  const {setStartDragging, setEndDragging} = useContext(UIContext);


  const onDragStart = (e:DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('id_entry', entry._id)
      setStartDragging()
    //todo modificar el estado cuando se esta haciendo drag

  }

  const onDragEnd = () => {
    //todo terminar el drag
    setEndDragging()
  }

  const onClickEntry = () => router.push(`/entries/${entry._id}`)

  return (
    <Card 
        sx={{marginBottom: 1, backgroundColor: '#22272e'}}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onClick={onClickEntry}
    >
        <CardActionArea>
            <CardContent>
                <Typography variant='h5' sx={{whiteSpace: 'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent: 'flex-end'}}>
                <Typography >{dateFunctions.getDateEntryToNow(entry.createAt)}</Typography>
            </CardActions>
        </CardActionArea>
    </Card>


  )
}
