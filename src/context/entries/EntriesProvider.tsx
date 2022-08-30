import { FC, useReducer, ReactNode, useEffect } from 'react';
import { EntriesContext, EntriesReducer } from './';
import { IEntry } from '../../interfaces';

import { useSnackbar } from 'notistack';
import {entriesApi} from 'src/apis';
import { ResponseEntries } from '../../pages/api/entries/index';


export interface EntriesState {
    entries: IEntry[];
}


const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
}


export const EntriesProvider:FC<{children: ReactNode}> = ({ children }) => {

    const [state, dispatch] = useReducer( EntriesReducer , ENTRIES_INITIAL_STATE );
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const addNewEntry = async(description:string) =>{
        const response = await entriesApi.post<ResponseEntries>('entries', {
          description
        });

        if(response.data.data){
            dispatch({type: '[Entries] - AddEntry', payload: response['data']['data'][0]})
        }
    }

    const onUpdateEntry = async({ _id, description, status }:IEntry):Promise<boolean> => {
      try {
        const response = await entriesApi.put<ResponseEntries>(`entries/${_id}`, { description, status });
        if(response.data.data){
            dispatch({type: '[Entries] - UpdateEntry', payload: response['data']['data'][0]})
        }
        enqueueSnackbar('Actualizado Correctamente', {variant: 'success', autoHideDuration: 1500, anchorOrigin: {vertical: 'top', horizontal: 'right'}});

        return true
      } catch (error) {
        if( error instanceof Error ){
            console.log("Mensaje de error" + error.message);
        }else{
            console.log("error completo");
        }
        return false
      }  
    }

    const refreshEntries = async() => {
        const { data } = await entriesApi.get<ResponseEntries>('/entries');
        if (!data) return;
        dispatch({type: '[Entries] - RefreshData', payload: data.data!});
    }
    useEffect(() => {
        refreshEntries();
    }, [])
    
    
    
    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            onUpdateEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
};