import mongoose,{ Model, Schema } from 'mongoose';
import { IEntry } from '../interfaces/entry';

export interface IEntryModel extends IEntry {}

const entrySchema = new Schema({
    description: { type: String, required: true },
    createAt   : { type: Number, required: true },
    status     : { type: String, 
                   enum: { type: String, values: ['pending', 'in-progress', 'finished'], message: '{VALUE} no es un estado permitido'} ,
                   required: true, default: 'pending' 
                },
});

const EntryModel: Model<IEntryModel> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);
export default EntryModel;