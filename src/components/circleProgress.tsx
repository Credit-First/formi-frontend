import { useState, useEffect } from 'react'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { CircleProgressProps } from '@/types'
import CircleProgressbar from './circleProgressbar'

const CircleProgress = ({
  title,
  color,
  percent,
  amount,
  content,
}: CircleProgressProps): JSX.Element => {
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (percent > progressPercent) {
        setProgressPercent(progressPercent + 1)
      }
      clearInterval(timer)
    }, 10)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <div className="cursor-pointer bg-back-item text-white rounded-xl p-6 group hover:bg-b-item/80">
      <div className="flex items-start justify-between pb-9">
        <div className="text-md">{title}</div>
        <DotsVerticalIcon className="h-8 w-8 rounded-full p-2 hover:bg-white/20" />
      </div>
      <div className="flex items-center justify-between">
        <CircleProgressbar
          strokeColor={color}
          strokeWidth={4}
          sqSize={70}
          percentage={progressPercent}
        />
        <div className="flex flex-col items-end justify-end">
          <div className="text-xl">{amount}</div>
          <div className="text-md">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default CircleProgress
