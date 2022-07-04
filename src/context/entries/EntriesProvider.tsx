import { FC, useReducer, ReactNode } from 'react';
import { EntriesContext, EntriesReducer } from './';
import { IEntry } from '../../interfaces';

import {v4 as uuidv4} from 'uuid'


export interface EntriesState {
    entries: IEntry[];
}


const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {_id:uuidv4(), createAt:1545544, description: 'anything', status: 'pending'},
        {_id:uuidv4(), createAt:1545545, description: 'anything fdfdfd', status: 'in-progres'},
        {_id:uuidv4(), createAt:1545546, description: 'anything ghrere545', status: 'finished'}

    ],
}


export const EntriesProvider:FC<{children: ReactNode}> = ({ children }) => {

    const [state, dispatch] = useReducer( EntriesReducer , ENTRIES_INITIAL_STATE );

    const addNewEntry = (description:string) =>{
        console.log("add");
        dispatch({type: '[Entries] - AddEntry', payload: {_id:uuidv4(), createAt: Date.now(), description, status: 'pending' }})
    }
    
    
    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
};