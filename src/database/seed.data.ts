import { IEntry } from '../interfaces/entry';

export type TSeedEntry = {
  createAt   : number;
  description: string;
  status     : string;
}

interface ISeedEntry {
    entries : TSeedEntry[]
}

export const seedData:ISeedEntry = {
  entries: [
    { createAt:1545544, description: 'anything', status: 'pending' },
    { createAt:1545545, description: 'anything fdfdfd', status: 'in-progress' },
    { createAt:1545546, description: 'anything ghrere545', status: 'finished' } 
  ]
}