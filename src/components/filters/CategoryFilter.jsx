import React from 'react'
import useLocalStorage from '../../Hooks/useLocalStorage'

function CategoryFilter({ onChangeCategory, categoryValue }) {
    const [categories, setCategories] = useLocalStorage("categoryWar", [])

    const options = [
        {
            id: "",
            title: "دسته بندی (همه)"
        },
        ...categories
    ]

    return (
        <div className='flex flex-1 items-center justify-between mb-6'>
            <span className='hidden md:block text-secondary-700 text-lg'>دسته بندی ها</span>
            <select value={categoryValue} onChange={onChangeCategory}
                className="textFiled__input text-sm w-full md:w-4/12 bg-secondary-0 text-secondary-800">
                {options.map((item) => <option key={item.id} value={item.id} >{item.title}</option>)}
            </select>
        </div>
    )
}

export default CategoryFilter
