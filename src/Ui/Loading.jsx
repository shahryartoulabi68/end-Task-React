import React from 'react'
import { LoaderIcon } from 'react-hot-toast'

function Loading() {
    return (
        <div className='flex items-center text-sm text-secondary-600'>
            <span> در حال بارگذاری...</span>
            <LoaderIcon className='inline-block' />
        </div>
    )
}

export default Loading
