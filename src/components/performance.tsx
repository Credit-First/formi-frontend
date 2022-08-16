import React from 'react'
import Image from 'next/image'
import { performanceListProps, PerformanceProps } from '@/types'

const Performance = ({ data }: PerformanceProps): JSX.Element => {
  return (
    <div className="cursor-default w-full h-full bg-back-item text-white rounded-xl p-6">
      <div className="text-sm pb-8">Team Member Performance</div>
      <div className="w-full">
        {data.map((item: performanceListProps) => (
          <div
            key={item.name}
            className="w-full flex items-center justify-between mb-6 last:mb-0"
          >
            <div className="relative p-2 mr-4">
              <div className="relative w-14 h-14">
                <Image
                  className="absolute"
                  src={`/images/team/${item.avatar}.png`}
                  layout="fill"
                  objectFit="fill"
                  alt="avatar"
                />
              </div>
              {item.name === 'Anirudh Arun' && (
                <div className="absolute w-6 h-6 top-0 right-0">
                  <Image
                    className="absolute "
                    src="/images/badge.png"
                    alt="avatar"
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold">{item.name}</div>
              <div className="text-t-detail/74 text-xs pt-[2px]">
                {item.role}
              </div>
            </div>
            <div className="w-14 rounded-lg text-center text-t-ranking bg-back-ranking/50 px-3 py-1">
              {item.ranking}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Performance
