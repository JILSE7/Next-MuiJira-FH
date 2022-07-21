import { EntriesState } from './';
import { IEntry } from '../../interfaces/entry';


type EntriesActionType = 
    { type: '[Entries] - AddEntry', payload: IEntry } 
   |{ type: '[Entries] - UpdateEntry', payload: IEntry}
   |{ type: '[Entries] - RefreshData', payload: IEntry[]}


export const EntriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

   switch (action.type) {

      case '[Entries] - AddEntry': 
         return {
            entries: [...state.entries, action.payload]
         }
      case '[Entries] - UpdateEntry':
      return {
         entries : state.entries.map(entry => {
            if(entry._id === action.payload._id){
               entry.status = action.payload.status
               entry.description = action.payload.description
            }
            return entry
         })
      }
      case '[Entries] - RefreshData':
         return {
            ...state,
            entries: action.payload
         }
       default:
          return state;
   }

}