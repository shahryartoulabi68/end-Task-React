import React from 'react'
import useGetCategory from '../../category/useGetCategory'

function CategoryFilter({ onChangeCategory, categoryValue }) {
    const { categories, isLoading } = useGetCategory()
    if (isLoading) return <p>در حال بار گذاری...</p>
    const options = [
        {
            id:"",
            title: "دسته بندی (همه)"
        },
        ...categories
    ]

    return (
        <div className='flex items-center justify-between border-b pb-4 mb-4 border-secondary-500'>
            <span className='text-secondary-700 text-lg'>دسته بندی ها</span>
            <select value={categoryValue} onChange={onChangeCategory}
                className="textFiled__input w-4/12 bg-secondary-0 text-secondary-800">
                {options.map((item) => <option key={item.id} value={item.id} >{item.title}</option>)}
            </select>
        </div>
    )
}

export default CategoryFilter
