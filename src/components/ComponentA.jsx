import React, { useState } from 'react'
import AddNewCategory from '../category/AddNewCategory'
import NewProduct from '../product/NewProduct'

function ComponentA() {
    const [openCategory, setOpenCategory] = useState(false)
    return (
        <div className='col-span-4 md:col-span-2'>
            <h1 className='hover:cursor-pointer text-secondary-700 text-sm py-3 hover:text-primary-700'
                onClick={() => setOpenCategory(!openCategory)}>اضافه کردن دسته بندی جدید</h1>
            {openCategory ? <AddNewCategory onClose={() => setOpenCategory(false)} /> : ""}
            <NewProduct />
        </div>
    )
}

export default ComponentA
