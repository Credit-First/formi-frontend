// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface performancelistProps {
  avatar: string
  name: string
  role: string
  ranking: number
}

const performancelist: performancelistProps[] = [
  {
    avatar: 'anirudh',
    name: 'Anirudh Arun',
    role: 'Project Manager',
    ranking: 9.8,
  },
  {
    avatar: 'samvrant',
    name: 'Samvrant',
    role: 'UX Designer',
    ranking: 9.2,
  },
  {
    avatar: 'aryamann',
    name: 'Aryamann',
    role: 'UI Designer',
    ranking: 9.1,
  },
  {
    avatar: 'dhanush',
    name: 'Dhanush',
    role: 'Motion Designer',
    ranking: 8.5,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<performancelistProps[]>
) {
  res.status(200).json(performancelist)
}
