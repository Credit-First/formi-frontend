import type { NextPage } from 'next'
import Layout from '@/layout'
import { circleProgressList } from '@/constants'
import CircleProgress from '@/components/circleProgress'
import BarProgress from '@/components/barProgress'
import LineProgress from '@/components/lineProgress'
import Performance from '@/components/performance'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
        <div className="w-full col-span-2 md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {circleProgressList.map((item) => (
            <CircleProgress key={item.title} {...item} />
          ))}
        </div>
        <div className="w-full h-full col-span-2 md:col-span-4">
          <BarProgress />
        </div>
        <div className="w-full h-full col-span-2 md:col-span-4 lg:col-span-5">
          <LineProgress />
        </div>
        <div className="w-full h-full col-span-2 md:col-span-4 lg:col-span-3">
          <Performance />
        </div>
      </div>
    </Layout>
  )
}

export default Home
