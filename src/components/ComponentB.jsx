import React, { useEffect, useState } from 'react'
import Filters from './filters/Filters'
import ProductList from '../product/ProductList'
import Search from './filters/Search'
import Sort from './filters/Sort'
import CategoryFilter from './filters/CategoryFilter'
import useLocalStorage from '../Hooks/useLocalStorage'

function ComponentB() {
    const [products, setProducts] = useLocalStorage("products", [])
    const [resoult, setResoult] = useState(products)

    const [search, setSearch] = useLocalStorage("searchL_S", "")
    const [sortValue, setSortValue] = useLocalStorage("sortL_S", "")
    const [categoryValue, setCategoryValue] = useLocalStorage("categoryL_S", "")

    useEffect(() => {
        const filterProducts = products
            .filter(product => {
                if (categoryValue === "") return product
                else {
                    return product.category === categoryValue
                }
            })
            .filter(product => product.title.includes(search))
            .sort((a, b) =>
                sortValue === 'asc'
                    ? new Date(a.createdAt) - new Date(b.createdAt)
                    : new Date(b.createdAt) - new Date(a.createdAt)
            ); setResoult(filterProducts)
    }, [categoryValue, search, sortValue, products])




    return (
        <div className='col-span-4 md:col-span-2 text-secondary-700'>
            <h2 className='hidden md:block border-b p-4 mb-4 border-secondary-500 text-lg '>فیلترها</h2>
            <Filters >
                <Search search={search} handleChange={(e) => setSearch(e.target.value)} />
                <div className='flex md:flex-col  gap-x-2'>
                    <Sort sortValue={sortValue} onChangeHandle={(e) => setSortValue(e.target.value)} />
                    <CategoryFilter categoryValue={categoryValue}
                        onChangeCategory={(e) => setCategoryValue(e.target.value)}
                    />
                </div>
            </Filters>
            <ProductList products={resoult} />
        </div>
    )
}

export default ComponentB
