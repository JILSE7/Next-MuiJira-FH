import { FC, useReducer, ReactNode, useEffect } from 'react';
import { EntriesContext, EntriesReducer } from './';
import { IEntry } from '../../interfaces';

import {v4 as uuidv4} from 'uuid'
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

    const addNewEntry = (description:string) =>{
        console.log("add");
        dispatch({type: '[Entries] - AddEntry', payload: {_id:uuidv4(), createAt: Date.now(), description, status: 'pending' }})
    }

    const onUpdateEntry = (entry:IEntry) => {
        dispatch({type: '[Entries] - UpdateEntry', payload:entry})
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