import React, { FC } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { IEntry } from '../../interfaces/entry';

interface IProps {
    entry: IEntry
}


export const EntryCard:FC<IProps> = ({entry}) => {
  return (
    <Card 
        sx={{marginBottom: 1, backgroundColor: '#22272e'}}
    >
        <CardActionArea>
            <CardContent>
                <Typography variant='h5' sx={{whiteSpace: 'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex', justifyContent: 'flex-end'}}>
                <Typography >hace 30 min {entry.createAt}</Typography>
            </CardActions>
        </CardActionArea>
    </Card>


  )
}
