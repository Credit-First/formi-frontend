import { useEffect } from 'react'
import Image from 'next/image'
import Chart from 'chart.js'
import { ChevronDownIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import { LineProgressProps, lineProgressProps } from '@/types'
import { performanceList_temp } from '@/constants'

const LineProgress = ({ data }: LineProgressProps): JSX.Element => {
  useEffect(() => {
    const tooltip: any = document.getElementById('chartjs-tooltip')
    const canvas: HTMLCanvasElement = document.getElementById(
      'line-chart'
    ) as HTMLCanvasElement
    const ctx: any = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 250)
    gradient.addColorStop(0, 'rgba(57, 84, 255, 0.18)')
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

    const labels: string[] = []
    const values: number[] = []

    data.map((item: lineProgressProps) => {
      labels.push(item.label)
      values.push(item.value)
    })
    const res = {
      labels: labels,
      datasets: [
        {
          borderColor: '#ED1690',
          data: values,
          fill: true,
          barThickness: 8,
          pointStyle: 'circle',
          pointHoverRadius: 10,
          hoverBorderColor: '#00ADE1',
          hoverBorderWidth: '3',
          pointHoverBackgroundColor: 'white',
          cubicInterpolationMode: 'monotone',
          tension: 0.4,
        },
      ],
    }

    const config: any = () => ({
      type: 'line',
      data: res,
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: false,
          text: 'Orders Chart',
        },
        interaction: {
          mode: 'nearest',
          intersect: false,
        },
        tooltips: {
          enabled: false,
          mode: 'nearest',
          intersect: false,
          custom: function (tooltipModel: {
            width: number
            height: number
            caretX: number
            caretY: number
            opacity: number
            dataPoints: { index: any }[]
          }) {
            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
              tooltip.style.opacity = 0
              return
            }
            // show the tooltip.
            tooltip.style.opacity = 1

            tooltip.style.left = tooltipModel.caretX + 'px'
            tooltip.style.top = tooltipModel.caretY + 'px'
          },
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
    })

    const myBar = new Chart(ctx, config())
    return function cleanup() {
      myBar.destroy()
    }
  }, [data])
  return (
    <div className="w-full h-full bg-back-item text-white rounded-xl p-6">
      <div className="flex items-center justify-between pb-9">
        <div className="text-md">Activities</div>
        <div className="flex items-center justify-between text-xs text-t-sidebar">
          <div className="flex items-center justify-center mr-10">
            <div>6 Months</div>
            <ChevronDownIcon className="h-3 w-3 ml-1" />
          </div>
          <DotsVerticalIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full h-[350px]">
          <canvas id="line-chart"></canvas>
          <div
            id="chartjs-tooltip"
            className='absolute rounded-xl opacity-0 text-white bg-back-tooltip shadow-tooltip px-5 py-3 before:content-[""] before:block before:absolute before:top-full before:left-1/2 before:border-[5px] before:border-transparent before:border-t-b-tooltip'
          >
            <div className="text-xs text-center pb-2">Project Meeting With</div>
            <div className="flex items-center justify-center -space-x-2">
              {performanceList_temp.map((item) => (
                <div key={item.name} className="relative w-5 h-5">
                  <Image
                    className="rounded-full border-2 border-white dark:border-gray-800"
                    src={`/images/team/${item.avatar}.png`}
                    layout="fill"
                    objectFit="fill"
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineProgress
