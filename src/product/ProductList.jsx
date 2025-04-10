import SingelProduct from './SingelProduct';

function ProductList({ products = [] }) {
    if (!products.length) return <p>محصولی وجود ندارد</p>

    return (
        <ul className='max-h-72  overflow-y-auto'>
            {products.map((item) => {
                return <SingelProduct key={item.id} item={item} />
            })}

        </ul>
    )
}

export default ProductList
