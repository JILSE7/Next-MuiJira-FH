import { EntriesState } from './';
import { IEntry } from '../../interfaces/entry';


type EntriesActionType = 
    { type: '[Entries] - AddEntry', payload: IEntry } 


export const EntriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

   switch (action.type) {

      case '[Entries] - AddEntry': 
         return {
            entries: [...state.entries, action.payload]
         }
      
       default:
          return state;
   }

}