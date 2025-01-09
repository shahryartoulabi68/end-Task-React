import { useMutation, useQueryClient } from "@tanstack/react-query"
import addNewCategory from "../services/httpServic"
import toast from "react-hot-toast"


export default function useCreatedCategory() {
    const queryClient = useQueryClient()
    const { isPending, mutate } = useMutation({
        mutationFn: addNewCategory,
        queryKey: ['category'],
        onSuccess: () => {
            toast.success("دسته بندی با موفقیت اضافه شد")
            queryClient.invalidateQueries({
                queryKey:["get-category"]
            })
        },
        onError: () => {
        }
    })

    return { isPending, mutate }
}