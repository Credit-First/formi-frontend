import { useState } from "react";
import clsx from "clsx";
import { SearchIcon } from '@heroicons/react/outline';
import { SearchInputProps } from "@/types";
import BackDrop from "./backDrop";

export default function SearchInput({ className }: SearchInputProps) {
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const handleClose = () => {
        setOpenSearchBar(false);
    }
    return (
        <BackDrop onClick={handleClose}>
            <div className={clsx('relative h-10 rounded-[50px] transition-all duration-400 mr-8', openSearchBar ? 'w-80  bg-white/10' : 'w-10  bg-transparent')}>
                <SearchIcon className='absolute top-0 left-0 h-10 w-10 rounded-full hover:bg-white/10 p-2' onClick={() => setOpenSearchBar(!openSearchBar)} />
                <input className={clsx('w-full h-full ml-10 bg-transparent focus-visible:outline-none', openSearchBar ? 'block' : 'hidden')} placeholder='Search ...' />
            </div>
        </BackDrop>
    )
}