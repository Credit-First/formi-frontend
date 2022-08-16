// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface lineProgresslistProps {
  label: string
  value: number
}

const lineProgresslist: lineProgresslistProps[] = [
  {
    label: 'January',
    value: 143,
  },
  {
    label: 'February',
    value: 144,
  },
  {
    label: 'March',
    value: 147,
  },
  {
    label: 'April',
    value: 145,
  },
  {
    label: 'May',
    value: 148,
  },
  {
    label: 'June',
    value: 146,
  },
  {
    label: 'July',
    value: 147,
  },
  {
    label: 'August',
    value: 145,
  },
  {
    label: 'September',
    value: 147,
  },
  {
    label: 'Octorber',
    value: 144,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<lineProgresslistProps[]>
) {
  res.status(200).json(lineProgresslist)
}
