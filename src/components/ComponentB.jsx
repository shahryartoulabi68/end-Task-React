import React, { useEffect, useState } from 'react'
import Filters from './filters/Filters'
import ProductList from '../product/ProductList'
import Search from './filters/Search'
import Sort from './filters/Sort'
import CategoryFilter from './filters/CategoryFilter'
import useGetProducts from '../product/useGetProducts'
import useLocalStorage from '../Hooks/useLocalStorage'

function ComponentB() {

    const [search, setSearch] = useLocalStorage("searchL_S", "")
    const [sortValue, setSortValue] = useLocalStorage("sortL_S", "")
    const [categoryValue, setCategoryValue] = useLocalStorage("categoryL_S", "")
    const { products, isLoading } = useGetProducts({ search, sortValue, categoryValue })



    return (
        <div className=' flex-1 h-screen text-secondary-700'>
            <h2 className='border-b p-4 mb-4 border-secondary-500 text-lg '>فیلترها</h2>
            <Filters >
                <Search search={search} onSubmit={(e) => setSearch(e.target.value)} />
                <Sort sortValue={sortValue} onChangeHandle={(e) => setSortValue(e.target.value)} />
                <CategoryFilter categoryValue={categoryValue}
                    onChangeCategory={(e) => setCategoryValue(e.target.value)}
                />
            </Filters>
            <ProductList products={products} isLoading={isLoading} />
        </div>
    )
}

export default ComponentB
