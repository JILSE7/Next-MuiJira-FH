import React, { useState, useMemo,ChangeEvent, useCallback, useId, FC, useContext } from 'react';
import { GetServerSideProps } from 'next'
import { capitalize ,Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { DeleteOutlineOutlined } from '@mui/icons-material';
import { Layout } from '../../components/layouts/Layout';
import { TEntryStatus, IEntry } from 'src/interfaces';
import { dbEntries } from 'src/database';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { dateFunctions } from 'src/utils';



const validStatus: TEntryStatus[] = ['pending', 'in-progress', 'finished'];

interface TEditEntry {
    value     : string;
    status    : TEntryStatus;
    createdAt : number;
    touched   : boolean;
}

interface IProps {
    entryProps:IEntry
}

const EntryPage: FC<IProps> = ({ entryProps }) => {
  
  const reactId = useId();
  const {onUpdateEntry} = useContext(EntriesContext)

  const [entry, setEntry] = useState<TEditEntry>({
    value: entryProps.description, 
    status: entryProps.status,
    createdAt: entryProps.createAt,
    touched: false
  })
  
const onInputChaged = useCallback(( event: ChangeEvent<HTMLInputElement> ) => {
  setEntry((state) => ({...state, value: event.target.value}));
  }
,[]);
   

const onStatusChange = useCallback(( event: ChangeEvent<HTMLInputElement> ) => {
  setEntry( (state) => ({ ...state, status: event.target.value as TEntryStatus }) );
  }
,[]);

const onTouchedChange = useCallback(() => setEntry( (state) => ({ ...state, touched: true }) ),[]);

const hasError = useMemo(() => {
  if(entry.value.length <=0 && entry.touched){
    return true;
  }
  return false
}, [entry.value, entry.touched])

const onSaveEntry = () => {

    if(entry.value.trim().length === 0) return;

    onUpdateEntry({...entryProps, description: entry.value, status: entry.status})
}
  
  
return (
<Layout title={`Editando - ${entry.value.substring(0,15) + "..."}`}>
    <Grid
    container
    justifyContent={'center'}
    sx={{ marginTop: 2 }}
    >
        <Grid item xs={12} sm={8} md={6}>
            <Card>
            <CardHeader title={`Entrada`} subheader={`Creada ${dateFunctions.getDateEntryToNow(entry.createdAt)}`}/>
            <CardContent>
                <TextField 
                    sx={{ marginTop: 2, marginBottom: 1 }}
                    fullWidth
                    placeholder='Nueva entrada'
                    autoFocus
                    multiline
                    label="Actualizar"
                    value={entry.value}
                    onChange={onInputChaged}
                    onBlur={onTouchedChange}
                    helperText={ hasError && "Ingrese un valor"}
                    error={ hasError }
                />
                {/*Radio*/}
                <FormControl>
                    <FormLabel sx={{marginLeft: '2px'}}> Status: </FormLabel>
                    <RadioGroup
                        row
                        onChange={onStatusChange}
                        value={entry.status}
                    >
                        {
                            validStatus.map( (item, i) => (
                            <FormControlLabel 
                                key={ `${reactId}${i}` }
                                value={ item }
                                control={ <Radio/> }
                                label={ capitalize(item) }
                            />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </CardContent>
            <CardActions>
                <Button
                    startIcon = { <SaveOutlinedIcon/> }
                    variant="contained"
                    fullWidth
                    onClick={onSaveEntry}
                    disabled={entry.value.length === 0}
                >
                    Save
                </Button>
            </CardActions>
            </Card>
        </Grid>
    </Grid>
    <IconButton 
        sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        backgroundColor: 'red'
        }}
    >
        <DeleteOutlineOutlined/>
    </IconButton>
</Layout>
);
};

// You should use getServerSideProps when:
// - ONLY IF YOU NEED TO PRE-RENDER A PAGE WHOSE DATA MUST BE FETCHED AT REQUEST TIME
// solo se deberia de utilizar cuando la pagina tiene que ser construida cuando el usuario haga una solicitud a esta pagina
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //Si el id no es valido, que nos redirija, para que queremos rederizar el componente si la entrada no va a existir
    const { id } = ctx.params as {id: string}

    const entry = await dbEntries.getEntryById(id)
    if (!entry){
      return {
        redirect: {
            destination: '/',
            permanent: false,
        }
      }
    }

    

    return {
        props: {
            entryProps: entry
        }
    }
}

export default EntryPage;
