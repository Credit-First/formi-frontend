import Image from 'next/image'
import { BellIcon } from '@heroicons/react/outline'
import { NavbarProps } from '@/types'
import DropdownList from '@/components/dropdownList'
import { dropdownlist } from '@/constants'
import SearchInput from '@/components/searchInput'

const Navbar = ({ selectedItem }: NavbarProps): JSX.Element => {
  return (
    <div className="z-10 w-full sticky top-0 flex items-center justify-between px-9 pt-14 pb-5 backdrop-blur-lg">
      <div className="text-3xl text-white">{selectedItem}</div>
      <div className="flex items-center justify-center text-symbol-main mr-4">
        <SearchInput />
        <BellIcon className="h-10 w-10  rounded-full hover:bg-white/10 p-2 mr-8" />
        <div className="flex items-center justify-center">
          <Image
            className="rounded-full"
            src="/images/avatar.png"
            width={42}
            height={42}
            alt="avatar"
          />
          <DropdownList options={dropdownlist} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
