import { FC, ReactNode, useReducer } from 'react';
import { UIContext, UIReducer } from './';


export interface UIState {
    isMenuOpen    : boolean;
}


const UI_INITIAL_STATE:UIState = {
    isMenuOpen: false
}


export const UIProvider:FC<{children:ReactNode}> = ({children}) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const openSideMenu = () => dispatch({type:'Open'});
    const closeSideMenu = () => dispatch({type:'Close'});
    

    return (
        <UIContext.Provider value={{
           ...state,
           openSideMenu,
           closeSideMenu
        }}>
            {
                children
            }
        </UIContext.Provider>
    )

}





