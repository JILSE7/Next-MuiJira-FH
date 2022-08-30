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
    { createAt:1545544, description: 'entrada prueba', status: 'pending' },
  ]
}