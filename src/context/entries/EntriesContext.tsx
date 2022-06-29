import { createContext } from 'react';
import { IEntry } from '../../interfaces/entry';



interface ContextProps {
    entries: IEntry[] 
}


export const EntriesContext = createContext({} as ContextProps)
