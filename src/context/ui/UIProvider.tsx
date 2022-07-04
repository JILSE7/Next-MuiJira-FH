import { FC, ReactNode, useReducer } from 'react';
import { UIContext, UIReducer } from '.';


export interface UIState {
    isMenuOpen    : boolean
    isAddingEntry : boolean
}

const UI_INITIAL_STATE:UIState = {
    isMenuOpen: false,
    isAddingEntry:false
}


export const UIProvider:FC<{children:ReactNode}> = ({children}) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const openSideMenu = () => dispatch({type:'Open'});
    const closeSideMenu = () => dispatch({type:'Close'});

    const setIsAddingEntry = (isAdding:boolean) => dispatch({type:'isAddingEntry', payload: isAdding})
    

    return (
        <UIContext.Provider value={{
           ...state,
           openSideMenu,
           closeSideMenu,
           setIsAddingEntry 
        }}>
            {
                children
            }
        </UIContext.Provider>
    )

}





