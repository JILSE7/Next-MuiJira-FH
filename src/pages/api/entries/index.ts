import type { NextApiRequest, NextApiResponse } from 'next';
import { mongoDB, seedData, TSeedEntry } from 'src/database';
import { EntryModel, IEntryModel } from 'src/models';

export type ResponseEntries = {
    ok  : boolean,
    message: string,
    data?: IEntryModel[]
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<ResponseEntries>) {
    
    switch ( req.method ) {
        case 'GET':
            return getEntries(res);
        case 'POST':
            return postEntry(req, res);
        case 'PUT':
            return postEntry(req, res);
        default:
            return res.status(200).json({ ok: false, message: "No existe este endpoint"});
    }
};


const getEntries = async(res: NextApiResponse<ResponseEntries>) => {
  try {
    await mongoDB.connect();
    const entries = await EntryModel.find().sort({ createdAt: 'ascending' });
    await mongoDB.disconnect();
    return res.status(200).json({ ok: true, message: "Excelente", data: entries});
      
  } catch (error) {
    console.log({error});
    return res.status(200).json({ ok: false, message: "Ha ocurrido un error al trael las entradas"});  
  }
};


const postEntry = async(req: NextApiRequest, res: NextApiResponse<ResponseEntries>) => {
    try {
        const { description } = req.body as TSeedEntry;
        if(!description) return res.status(400).json({ ok: false, message: "La nueva entrada no puede ir vacia"});  

        const newEntry = new EntryModel({description, createAt: Date.now() });
        await mongoDB.connect();
        await newEntry.save();
        return res.status(201).json({ ok: true, message: "Se ha agregado exitosamente la nueva entrada", data:[newEntry]});
    } catch (error : any) {
        if (error instanceof Error){
          return res.status(500).json({ ok: false, message: error.message});
        }
          
    } finally {
        await mongoDB.disconnect();
    }
}
