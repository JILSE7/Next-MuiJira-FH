

export interface IEntry {
    _id        : string
    description: string
    createAt   : number
    status     : TEntryStatus  //pending - in-progress - finished
}

export type TEntryStatus = 'pending' | 'in-progress' | 'finished'