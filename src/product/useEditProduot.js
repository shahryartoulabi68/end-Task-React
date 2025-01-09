import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProductsApi } from '../services/httpServic'
import toast from 'react-hot-toast'
import editProductApi from '../services/productServic'

export default function useEditProduct() {
    const queryClient = useQueryClient()
    const { isPending, mutate: editProduct } = useMutation({
        mutationFn:editProductApi,
        onSuccess: () => {
            toast.success("محصول با موفقیت اصلاح شد")
            queryClient.invalidateQueries({
                queryKey: ["product"]
            })
        },
        onError: (err) => {
        }
    })

    return { isPending, editProduct }
}