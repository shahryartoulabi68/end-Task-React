import React from 'react'
import { HiSearch } from 'react-icons/hi'

function Search({ search, handleChange }) {
    return (
        <div className='flex items-center justify-between mb-5'>
            <span className='hidden md:block text-secondary-700 text-lg'>جستجو</span>
            <div className="flex textFiled__input items-center w-full md:w-1/2 bg-secondary-0 text-secondary-800 rounded-xl px-2 py-2 gap-2">
                {/* آیکون فقط در موبایل */}

                <input
                    value={search}
                    onChange={handleChange}
                    type="text"
                    placeholder="جستجو"
                    className=" w-full bg-transparent focus:outline-none"
                />
                <HiSearch className="w-5 h-5 text-secondary-500 block md:hidden" />

            </div>
        </div>
    )
}

export default Search
