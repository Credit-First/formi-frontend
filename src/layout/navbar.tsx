import Image from 'next/image';
import { BellIcon, SearchIcon, ChevronDownIcon } from '@heroicons/react/outline';

const Navbar = (): JSX.Element => {
  return (
    <div className='z-10 w-full sticky top-0 flex items-center justify-between px-9 pt-14 pb-5 backdrop-blur-lg'>
      <div className='text-3xl text-white'>Dashboard</div>
      <div className='flex items-center justify-center text-symbol-main mr-4'>
        <SearchIcon className='h-10 w-10 rounded-full hover:bg-white/10 p-2' />
        <BellIcon className='h-10 w-10  rounded-full hover:bg-white/10 p-2 mr-8' />
        <div className='flex items-center justify-center'>
          <Image
            className='rounded-full'
            src='/images/avatar.png'
            width={42}
            height={42}
            alt='avatar'
          />
          <ChevronDownIcon className="h-5 w-5 ml-2" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
