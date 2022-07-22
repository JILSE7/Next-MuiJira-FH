import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { mongoDB, seedData, TSeedEntry } from 'src/database';
import { EntryModel, IEntryModel } from 'src/models';
import { IEntry } from '../../../interfaces/entry';

export type ResponseEntries = {
  ok  : boolean,
  message: string,
  data?: IEntryModel[]
}



export default async function handler (req: NextApiRequest, res: NextApiResponse<ResponseEntries>) {
  switch ( req.method ) {
      case 'PUT':
        return putEntry(req, res);
      default:
        return res.status(400).json({ ok: false, message: "No existe ese endpoint" });
  }
};


const putEntry = async(req: NextApiRequest, res: NextApiResponse<ResponseEntries>) => {
  try {
    const {id} = req.query;
    
    if(!mongoose.isValidObjectId(id)){
    return res.status(401).json({ ok: false, message: "Identificador Invalido" });
    }
    
    await mongoDB.connect();
    const entryToUpdate = await EntryModel.findById<IEntry>(id);
    console.log(entryToUpdate);
    if (!entryToUpdate) {
      await mongoDB.disconnect();
      return res.status(404).json({ ok: false, message: "No se encontro ninguna entrada con ese id" });
    }
    const {description = entryToUpdate.description, status = entryToUpdate.status } = req.body;

    const entryUpdated = await EntryModel.findByIdAndUpdate<IEntry>(id, {description, status}, {runValidators: true, new: true});
    await mongoDB.disconnect();
    return res.status(201).json({ ok: true, message: "Se ha agregado exitosamente la nueva entrada", data: [entryUpdated!]});

  } catch (error) {
    console.log(error);
    if (error instanceof Error){
        return res.status(500).json({ ok: false, message: error.message});
    }
    return res.status(500).json({ ok: false, message: "Ha ocurrido un error al actualizar la entrada"});
  } finally { 
    await mongoDB.disconnect();
  }
}