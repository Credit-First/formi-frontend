import React, { useCallback, useState } from 'react'
import BackDrop from './backDrop'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { DropdownListProps } from '@/types'

export default function DropdownList({ options }: DropdownListProps) {
  const [opened, setOpened] = useState(false)
  const handleClose = useCallback(() => setOpened(false), [])

  return (
    <BackDrop onClick={handleClose}>
      <div className="relative w-10 h-10">
        <div
          className="w-full h-full flex items-center justify-between rounded"
          onClick={() => setOpened(!opened)}
        >
          <ChevronDownIcon className="h-5 w-5 ml-2" />
        </div>
        {opened && (
          <div className="z-10 cursor-pointer w-32 absolute right-0 rounded-xl bg-back-sidebar text-text-sidebar px-4 py-2">
            {options.map((item) => (
              <div key={item} className="py-2">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </BackDrop>
  )
}
