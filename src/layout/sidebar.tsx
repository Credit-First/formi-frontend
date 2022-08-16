import Image from 'next/image'
import clsx from 'clsx'
import { LogoutIcon } from '@heroicons/react/outline'
import { sidebarItems } from '@/constants'
import { SidebarProps } from '@/types'

const Sidebar = ({
  selectedItem,
  setSelectedItem,
}: SidebarProps): JSX.Element => {
  return (
    <div className="z-10 sticky top-0 flex flex-col items-center justify-between w-[80px] md:min-w-[224px] h-screen overflow-y-auto bg-back-sidebar transition-all">
      <div className="w-full flex items-center justify-center px-3 md:px-0 pt-12 pb-20">
        <Image src="/images/logo.png" width={93} height={70} alt="avatar" />
      </div>

      <div className="w-full flex-1 cursor-pointer text-lg text-text-sidebar ">
        {sidebarItems.map((item) => (
          <div
            key={item.title}
            className={clsx(
              'leading-5 flex items-center px-4 py-4 md:px-10 md:py-5 border-transparent hover: border-l-4 hover:bg-border-sidebar/5 hover:border-border-sidebar',
              selectedItem === item.title &&
                'border-l-4 bg-border-sidebar/5 border-border-sidebar'
            )}
            onClick={() => setSelectedItem(item.title)}
          >
            <item.icon className="h-8 w-8 md:h-5 md:w-5 md:mr-5" />
            <span className="hidden md:block">{item.title}</span>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center px-2 md:px-0 pt-10 pb-24">
        <button className="w-full md:w-[127px] h-[45px] flex items-center justify-center rounded-lg text-white text-lg bg-btn-secondary p-3">
          <LogoutIcon className="h-5 w-5 md:mr-3" />
          <span className="hidden md:block">Log out</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
