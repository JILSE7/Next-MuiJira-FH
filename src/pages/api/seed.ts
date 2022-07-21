import type { NextApiRequest, NextApiResponse } from 'next'
import { mongoDB, seedData } from 'src/database'
import { EntryModel } from 'src/models'

type Data = {
    ok  : boolean,
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({
            ok:false,
            message: "No se tiene acceso a este servicio en produccion"
        })
    }

    await mongoDB.connect();
    await EntryModel.deleteMany();
    await EntryModel.insertMany( seedData.entries );
    await mongoDB.disconnect();

    console.log(process.env.MONGO_URL);

    res.status(200).json({ ok: true, message: "proceso realizado correctamente"});
}