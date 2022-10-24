import type { NextApiRequest, NextApiResponse } from 'next'
import { getSongs } from '@/features/data'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  res.json(await getSongs())
}
