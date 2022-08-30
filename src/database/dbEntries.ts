import { isValidObjectId } from 'mongoose';
import { IEntry } from 'src/interfaces';
import { EntryModel } from 'src/models';
import { mongoDB } from '.';


export const getEntryById = async (id: string):Promise<IEntry|null> => {
  if (!isValidObjectId(id)) return null;

  await mongoDB.connect();
  const entry = await EntryModel.findById(id).lean();
  await mongoDB.disconnect();
  return JSON.parse( JSON.stringify(entry) );
};