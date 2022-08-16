import type { GetServerSideProps } from 'next'
import Layout from '@/layout'
import CircleProgress from '@/components/circleProgress'
import BarProgress from '@/components/barProgress'
import LineProgress from '@/components/lineProgress'
import Performance from '@/components/performance'
import { HomeProps } from '@/types'
import {
  barProgressList_temp,
  circleProgresslist_temp,
  lineProgressList_temp,
  performanceList_temp,
} from '@/constants'

const Home = ({
  performanceList,
  circleProgressList,
  barProgressList,
  lineProgressList,
}: HomeProps): JSX.Element => {
  return (
    <Layout>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
        <div className="w-full col-span-2 md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {circleProgressList.map((item) => (
            <CircleProgress key={item.title} {...item} />
          ))}
        </div>
        <div className="w-full h-full col-span-2 md:col-span-4">
          <BarProgress data={barProgressList} />
        </div>
        <div className="w-full h-full col-span-2 md:col-span-4 lg:col-span-5">
          <LineProgress data={lineProgressList} />
        </div>
        <div className="w-full h-full col-span-2 md:col-span-4 lg:col-span-3">
          <Performance data={performanceList} />
        </div>
      </div>
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  let performanceList = []
  try {
    const res_performance = await fetch(
      `https://fancy-jalebi-be8209.netlify.app/api/getPerformanceList`
    )
    performanceList = await res_performance.json()
  } catch (error) {
    performanceList = performanceList_temp
  }

  let circleProgressList = []
  try {
    const res_circleProgress = await fetch(
      `https://fancy-jalebi-be8209.netlify.app/api/getCircleProgressList`
    )
    circleProgressList = await res_circleProgress.json()
  } catch (error) {
    circleProgressList = circleProgresslist_temp
  }

  let barProgressList = []
  try {
    const res_barProgress = await fetch(
      `https://fancy-jalebi-be8209.netlify.app/api/getBarProgressList`
    )
    barProgressList = await res_barProgress.json()
  } catch (error) {
    barProgressList = barProgressList_temp
  }

  let lineProgressList = []
  try {
    const res_lineProgress = await fetch(
      `https://fancy-jalebi-be8209.netlify.app/api/getLineProgressList`
    )
    lineProgressList = await res_lineProgress.json()
  } catch (error) {
    lineProgressList = lineProgressList_temp
  }

  return {
    props: {
      performanceList,
      circleProgressList,
      barProgressList,
      lineProgressList,
    },
  }
}

export default Home
