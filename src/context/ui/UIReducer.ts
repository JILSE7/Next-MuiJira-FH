import { UIState } from './UIProvider';

type Actions = {type: 'Open'} | {type: 'Close'} | {type: 'isAddingEntry' , payload: boolean};


export const UIReducer = (state:UIState, action:Actions):UIState => {

       switch (action.type) {
        case 'Open':
             return {
                ...state,
               isMenuOpen: true
             }

        case 'Close': 
           return {
               ...state,
               isMenuOpen: false
        }

        case 'isAddingEntry': 

        return {
           ...state,   
           isAddingEntry: action.payload
        }
            
        
        default:
           return state
      }
};
