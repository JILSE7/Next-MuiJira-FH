import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    ok    : boolean
    name  : string
    method: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    res.status(200).json({
        ok: true,
        name: "Jhon Doe",
        method: req.method || 'No hay methodo'
    })
}