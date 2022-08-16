// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface circleProgresslistProps {
  title: string
  color: string
  percent: number
  amount: number
  content: string
}

const circleProgresslist: circleProgresslistProps[] = [
  {
    title: 'Work',
    color: '#FFD339',
    percent: 50,
    amount: 75,
    content: 'Works Today',
  },
  {
    title: 'Analytics',
    color: '#FF6D39',
    percent: 25,
    amount: 310,
    content: 'Analytics Today',
  },
  {
    title: 'Statistics',
    color: '#9539FF',
    percent: 59,
    amount: 75,
    content: 'Works Today',
  },
  {
    title: 'Tasks',
    color: '#3954FF',
    percent: 75,
    amount: 15,
    content: 'Works Today',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<circleProgresslistProps[]>
) {
  res.status(200).json(circleProgresslist)
}
