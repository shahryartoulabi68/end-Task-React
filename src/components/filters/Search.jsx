import React from 'react'

function Search({ search, onSubmit }) {
    return (
        <div className='flex items-center justify-between mb-5'>
            <span className='text-secondary-700 text-lg'>جستجو</span>
            <input value={search} onChange={onSubmit} type="text" name="" id=""
                className='textFiled__input w-1/2 bg-secondary-0 text-secondary-800 ' />
        </div>
    )
}

export default Search
