import { useState } from 'react'
import Head from 'next/head'
import Seo from './seo'
import { LayoutProps } from '@/types'
import Sidebar from './sidebar'
import Navbar from './navbar'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState('dashboard')

  return (
    <>
      <Seo />
      <Head>
        <title>Formi Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className="flex">
          <Sidebar
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          <div className="w-full bg-back-main">
            <Navbar selectedItem={selectedItem} />
            <div className="w-full px-9 py-12">{children}</div>
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  )
}

export default Layout
