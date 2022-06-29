import { createContext } from 'react';
 
 export interface ContextProps  {
    isMenuOpen: boolean;
    openSideMenu  : () => void;
    closeSideMenu : () => void;
}

 export const UIContext = createContext({} as ContextProps);