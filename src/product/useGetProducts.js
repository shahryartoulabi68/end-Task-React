import { useQuery } from '@tanstack/react-query';
import { getProductsApi } from '../services/httpServic';

export default function useGetProducts({ search, sortValue, categoryValue }) {
    const { data: products, isLoading } = useQuery({
        queryFn: () => getProductsApi({ search, sortValue, categoryValue }),
        queryKey: ["product",{ search, sortValue, categoryValue }]
    })

    // const { } = data || {}
    return { products, isLoading }
}



