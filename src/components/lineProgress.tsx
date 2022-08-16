import { useEffect } from 'react'
import Chart from 'chart.js'
import { ChevronDownIcon, DotsVerticalIcon } from '@heroicons/react/outline'
import { LineProgressProps, lineProgressProps } from '@/types'

const LineProgress = ({ data }: LineProgressProps): JSX.Element => {
  useEffect(() => {
    const canvas: HTMLCanvasElement = document.getElementById(
      'line-chart'
    ) as HTMLCanvasElement
    const ctx: any = canvas.getContext('2d')

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
  }, [])
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
        </div>
      </div>
    </div>
  )
}

export default LineProgress
