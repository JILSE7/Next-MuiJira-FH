import { FC, ReactNode, useReducer } from 'react';
import { UIContext, UIReducer } from '.';


export interface UIState {
    isMenuOpen    : boolean;
    isAddingEntry : boolean;
    isDragging    : boolean;
}

const UI_INITIAL_STATE:UIState = {
    isMenuOpen    : false,
    isAddingEntry : false,
    isDragging    : false
}


export const UIProvider:FC<{children:ReactNode}> = ({children}) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const openSideMenu = () => dispatch({type:'Open'});
    const closeSideMenu = () => dispatch({type:'Close'});

    const setIsAddingEntry = (isAdding:boolean) => dispatch({type:'isAddingEntry', payload: isAdding});
    
    const setStartDragging = () => dispatch({type:'startDragging'});
    const setEndDragging = () => dispatch({type: 'endDragging'});

    return (
        <UIContext.Provider value={{
           ...state,
           //Methods
           openSideMenu,
           closeSideMenu,
           setIsAddingEntry,
           setStartDragging,
           setEndDragging

        }}>
            {
                children
            }
        </UIContext.Provider>
    )

}





