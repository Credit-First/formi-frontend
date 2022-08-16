import { useEffect } from 'react'
import Chart from 'chart.js'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/outline'
import DropdownList from './dropdownList'
import { monthList } from '@/constants'
import { barProgressProps, BarProgressProps } from '@/types'

const BarProgress = ({ data }: BarProgressProps): JSX.Element => {
  useEffect(() => {
    const labels: string[] = []
    const value_1: number[] = []
    const value_2: number[] = []

    data.map((item: barProgressProps) => {
      labels.push(item.label)
      value_1.push(item.value_1)
      value_2.push(item.value_2)
    })

    const config = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: '#3954FF',
            borderColor: '#3954FF',
            data: value_1,
            fill: false,
            barThickness: 8,
          },
          {
            fill: false,
            backgroundColor: '#FFD339',
            borderColor: '#FFD339',
            data: value_2,
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
    }
    const canvas: HTMLCanvasElement = document.getElementById(
      'bar-chart'
    ) as HTMLCanvasElement
    const ctx: any = canvas.getContext('2d')
    const myBar = new Chart(ctx, config)

    return function cleanup() {
      myBar.destroy()
    }
  })

  return (
    <div className="w-full h-full bg-back-item text-white rounded-xl p-6">
      <div className="flex items-center justify-between pb-9">
        <div className="text-md">Activities</div>
        <div className="flex items-center justify-between text-xs text-t-sidebar">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center pr-4">
              <div className="w-2 h-2 bg-chart-200 mr-2" />
              <div>Received</div>
            </div>
            <div className="flex items-center justify-center pr-4">
              <div className="w-2 h-2 bg-chart-100 mr-2" />
              <div>Completed</div>
            </div>
          </div>
          <div className="flex items-center justify-center ml-10">
            <div>6 Months</div>
            <DropdownList options={monthList} />
            <ChevronDownIcon className="h-3 w-3 ml-1" />
          </div>
        </div>
        <DotsVerticalIcon className="h-5 w-5" />
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full h-[250px]">
          <canvas id="bar-chart"></canvas>
        </div>
      </div>
    </div>
  )
}

export default BarProgress
