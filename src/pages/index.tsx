import type { GetServerSideProps } from 'next'
import Layout from '@/layout'
import CircleProgress from '@/components/circleProgress'
import BarProgress from '@/components/barProgress'
import LineProgress from '@/components/lineProgress'
import Performance from '@/components/performance'
import { HomeProps } from '@/types'

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
  const res_performance = await fetch(
    `http://localhost:3001/api/getPerformanceList`
  )
  const performanceList = await res_performance.json()

  const res_circleProgress = await fetch(
    `http://localhost:3001/api/getCircleProgressList`
  )
  const circleProgressList = await res_circleProgress.json()

  const res_barProgress = await fetch(
    `http://localhost:3001/api/getBarProgressList`
  )
  const barProgressList = await res_barProgress.json()

  const res_lineProgress = await fetch(
    `http://localhost:3001/api/getLineProgressList`
  )
  const lineProgressList = await res_lineProgress.json()

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
