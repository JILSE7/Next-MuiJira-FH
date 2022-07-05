import { Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';
import { ChangeEvent, useState, useContext, startTransition } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from 'src/context/ui';


export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext)
    const {setIsAddingEntry, isAddingEntry} = useContext(UIContext)

    const [inputValue, setinputValue] = useState<string>('')

    const [isTouched, setisTouched] = useState<boolean>(false)

    const onTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setinputValue(e.target.value)
    
    console.log('me renderizo');
    const saveEntry = () => {
        if (inputValue.length <= 0) return;

        addNewEntry(inputValue)
        startTransition(() => {
            setinputValue('')
            setisTouched(false)
        })
        setIsAddingEntry(false)


    }

  return (

    <>
        {
            !isAddingEntry && <Button startIcon={<AddIcon/>} fullWidth variant={'outlined'} color={'primary'} sx={{marginBottom: 2}} onClick={() => setIsAddingEntry(true)}/>
        }
        {
            isAddingEntry && (
                <Box sx={{display:'flex', flexDirection:'column', justifyContent: 'center'}}>
                    <TextField  fullWidth sx={{marginTop:2, marginBottom: 2}} 
                                placeholder="Do Chemycal Homework" 
                                autoFocus multiline label="New Pending"
                                onChange={(e) => onTextChange(e)}
                                onBlur={() => setisTouched(true)}
                                error={inputValue.length <= 0 && isTouched ? true : false}
                    />
                    <div className='flexColCenter'>
                        <Button variant='outlined' color='secondary' endIcon={<SaveOutlinedIcon/>} onClick={saveEntry}>Guardar</Button>
                        <Button variant='outlined' color='error' endIcon={<CancelIcon/>} onClick={() => setIsAddingEntry(false)}>Cancelar</Button>
                    </div>
                </Box>

            )
        }
    </>

  )
}
