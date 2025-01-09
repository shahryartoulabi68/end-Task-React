import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProductsApi } from '../services/httpServic'
import toast from 'react-hot-toast'

export default function useDeleteProduct() {
    const queryClient = useQueryClient()
    const { isPending, mutate: deleteProduct } = useMutation({
        mutationFn: deleteProductsApi,
        onSuccess: () => {
            toast.success("محصول با موفقیت حذف شد")
            queryClient.invalidateQueries({
                queryKey: ["product"]
            })
        },
        onError: (err) => {
        }
    })

    return { isPending, deleteProduct }
}


