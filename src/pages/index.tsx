import Layout from '@/layout'
import CircleProgress from '@/components/circleProgress'
import BarProgress from '@/components/barProgress'
import LineProgress from '@/components/lineProgress'
import Performance from '@/components/performance'
import { HomeProps } from '@/types'
import getPerformance from '@/lib/getPerformance'
import getBarProgress from '@/lib/getBarProgress'
import getCircleProgress from '@/lib/getCircleProgress'
import getLineProgress from '@/lib/getLineProgress'

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
export async function getStaticProps() {
  const performanceList = await getPerformance()
  const barProgressList = await getBarProgress()
  const lineProgressList = await getLineProgress()
  const circleProgressList = await getCircleProgress()

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
