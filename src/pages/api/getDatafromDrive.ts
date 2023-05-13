// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log('here', req.query.fid);
    const fId = req.query.fid;
    const response: any = await fetch(
      `https://drive.google.com/uc?export=view&id=${fId}`
      //   `https://drive.google.com/uc?export=view&id=1Q3qcZr76Ej6uLMvDgBOdBaL1HIh9yGYI`
    );
    console.log('response', response);
    const json = await response.json();
    console.log(json, 'json here');
    console.log('here');
    res.status(200).send(json);
  } catch (error: any) {
    console.log('error', error);
    res.status(500).send(error);
  }
}
