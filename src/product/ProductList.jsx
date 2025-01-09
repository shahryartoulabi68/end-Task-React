import { LoaderIcon } from 'react-hot-toast';
import SingelProduct from './SingelProduct';
import Loading from '../Ui/Loading';

function ProductList({ products = {}, isLoading }) {
    if (isLoading) return <Loading />
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
