import { createContext } from 'react';
 
 export interface ContextProps  {
    isMenuOpen       : boolean;
    isAddingEntry    : boolean;
    isDragging       : boolean;

    openSideMenu     : () => void;
    closeSideMenu    : () => void;
    setStartDragging : () => void;
    setEndDragging   : () => void;
    setIsAddingEntry : (isAdding:boolean) => void;
}

 export const UIContext = createContext({} as ContextProps);