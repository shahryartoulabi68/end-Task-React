import React, { useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'
import useGetCategory from '../category/useGetCategory'
import useDeleteProduct from './useDeleteProduct'
import Modal from '../Ui/Modal'
import NewProduct from './NewProduct'
import { usePersianNumber } from '../Utils/persianNumber'


function SingelProduct({ item }) {
    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const { categories } = useGetCategory()
    const category = categories.find((c) => c.id === item.category)
    const { deleteProduct, isPending } = useDeleteProduct();

    const handelDelete = (_id) => {
        deleteProduct(_id)
    }

    return (
        <li className='flex items-center justify-between py-2 border-b'>
            <span className='text-sm'>{item.title}</span>
            <div className='flex items-center gap-x-2 text-sm'>
                <span >{new Date(item.createdAt).toLocaleDateString("fa")}</span>
                <span className='border p-1 rounded-xl border-secondary-400'>{category.title}</span>
                <span className='border w-6 h-6 flex items-center justify-center p-3 rounded-full 
                border-secondary-400'>{usePersianNumber(item.quntity)}</span>
                <button onClick={() => setOpenEdit(true)}>
                    <HiOutlinePencil className='icon text-success ' />
                </button>
                {openEdit ?
                    <Modal onClose={() => setOpenEdit(false)} open={openEdit} title={item.title}>
                        <NewProduct item={item} category={category} onClose={() => setOpenEdit(false)} />
                    </Modal> : ""

                }

                <button onClick={() => setOpenDelete(true)}>
                    < HiOutlineTrash className='icon text-error' />
                </button>
                {openDelete ?
                    <Modal onClose={() => setOpenDelete(false)} open={openDelete} title={item.title}>
                        <div>
                            <h1 className='text-secondary-800 font-bold mb-3'>آیا از حذف محصول {item.title} مطمئن هستید؟</h1>
                            <div className='flex gap-x-2 items-center w-full'>
                                <button onClick={() => setOpenDelete(false)} className='btn btn--primary flex-1'>لغو</button>
                                <button onClick={() => handelDelete(item.id)} className='btn border border-error flex-1 p-2'>تایید</button>
                            </div>
                        </div>
                    </Modal> : ""}
            </div>
        </li>
    )
}

export default SingelProduct
