import { createContext } from 'react';
import { IEntry } from '../../interfaces/entry';



interface ContextProps {
    entries: IEntry[]
    addNewEntry: (description: string) => void
}


export const EntriesContext = createContext({} as ContextProps)
