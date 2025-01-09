import { useQuery } from '@tanstack/react-query'
import { getCategoryApi } from '../services/httpServic'

export default function useGetCategory() {
    const { data:categories, isLoading } = useQuery({
        queryFn: getCategoryApi,
        queryKey: ["get-category"]
    })

    // const {categories}  = data || {};
    return { categories, isLoading }
}


