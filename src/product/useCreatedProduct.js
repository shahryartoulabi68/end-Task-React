import toast from 'react-hot-toast'
import { addNewProduct } from '../services/httpServic'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useCreatedProduct() {

    const queryClient = useQueryClient()
    const { isPending, mutate: createProduct } = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            toast.success("محصول با موفقیت اضافه شد")
            queryClient.invalidateQueries({
                queryKey: ["product"]
            })
        },
        onError: (err) => {
        }
    })

    return { isPending, createProduct }

}


