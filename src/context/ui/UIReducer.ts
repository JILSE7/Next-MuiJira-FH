import { UIState } from './UIProvider';

type Actions = {type: 'Open'} | {type: 'Close'};


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

        default:
           return state
      }
};
