import type { NextPage } from 'next';
import Layout from '@/layout';
import { circleProgressList } from '@/constants';
import CircleProgress from '@/components/circleProgress';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="w-full col-span-2 md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {circleProgressList.map((item) => (
          <CircleProgress key={item.title} {...item} />
        ))}
      </div>
    </Layout>
  )
}

export default Home
