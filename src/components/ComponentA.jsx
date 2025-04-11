import React, { useState } from 'react'
import ShowModalAddProduct from '../product/ShowModalAddProduct';
import ShowModalCategory from './ShowModalCategory';

function ComponentA() {
    return (
        <div className=' md:col-span-2 mt-2 row-span-1 col-span-4 
        flex md:flex-col md:items-start justify-between'>
            <ShowModalCategory />
            <ShowModalAddProduct />
        </div>
    )
}

export default ComponentA
