import { TEntryStatus } from "src/interfaces";
import { IEntry } from '../interfaces/entry';


export const getEntriesByStatus = (status: TEntryStatus, entries: IEntry[]) => entries.filter((it,i) => it.status === status)