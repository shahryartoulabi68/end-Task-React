import React from 'react'
import TextField from '../Ui/TextField'
import { useForm } from 'react-hook-form'
import RHFselect from '../Ui/RHFselect'
import useCreatedProduct from './useCreatedProduct'
import toast from 'react-hot-toast'
import useGetCategory from '../category/useGetCategory'
import { stringify } from 'postcss'
import useEditProduct from './useEditProduot'

function NewProduct({ item = {}, category = {}, onClose }) {
    const { id: editId } = item
    const isEditId = Boolean(editId)
    const { title, quntity } = item

    const { editProduct, isPending: isloading } = useEditProduct()

    let editValues = {}
    if (isEditId) {
        editValues = {
            title,
            quntity,
            category: category.id
        }
    }

    const { register, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues: editValues })
    const { categories = {}, isLoading } = useGetCategory()
    const { createProduct, isPending } = useCreatedProduct()
    if (!categories.length) return <p>دسته بندی وجود ندارد</p>
    console.log(categories);

    const onSubmit = (data) => {
        const newProduct = {
            id: new Date().getTime,
            ...data,
            createdAt: new Date().toISOString()
        }

        if (isEditId) {
            editProduct({ id: item.id, newProduct }, {
                onSuccess: () => {
                    onClose();
                    reset();
                }
            })
        }

        else {
            createProduct(newProduct, {
                onSuccess: () => {
                    reset()
                }
            })
        }

    }

    return (
        <div className='mb-2'>
            <h2 className='text-secondary-700 font-bold text-sm'>اضافه کردن محصول جدید</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="عنوان محصول"
                    name="title"
                    register={register}
                    required
                    validationSchema={{
                        required: "عنوان الزامی میباشد",
                        minLength: {
                            value: 3,
                            message: "طول عنوان نامعتبر است"
                        },
                        maxLength: {
                            value: 15
                        }
                    }}
                    errors={errors}
                />
                <TextField
                    label="تعداد"
                    name="quntity"
                    register={register}
                    required
                    type='number'
                    validationSchema={{
                        required: "مقدار الزامی میباشد",
                        minLength: {
                            value: 1,
                            message: "طول مقدار نامعتبر است"
                        },
                        maxLength: {
                            value: 4
                        }
                    }}
                    errors={errors}
                />
                <RHFselect label="دسته بندی" register={register} required name="category" options={categories} />
                <div className='flex mt-8 gap-x-8'>
                    <button className='btn text-white btn--primary flex-1'>اضافه کردن محصول</button>
                    <button onClick={onClose} type='onsubmit' className='btn border border-secondary-700 px-4 text-secondary-700 py-3  flex-1'>لغو</button>
                </div>
            </form>
        </div >
    )
}

export default NewProduct
