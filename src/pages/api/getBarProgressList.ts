// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface barProgressProps {
  label: string
  value_1: number
  value_2: number
}
const barProgress: barProgressProps[] = [
  {
    label: 'January',
    value_1: 123,
    value_2: 83,
  },
  {
    label: 'February',
    value_1: 140,
    value_2: 116,
  },
  {
    label: 'March',
    value_1: 175,
    value_2: 140,
  },
  {
    label: 'April',
    value_1: 146,
    value_2: 123,
  },
  {
    label: 'May',
    value_1: 105,
    value_2: 75,
  },
  {
    label: 'June',
    value_1: 140,
    value_2: 116,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<barProgressProps[]>
) {
  res.status(200).json(barProgress)
}
