import React from 'react'
import TextField from '../Ui/TextField'
import { useForm } from "react-hook-form"
import useCreatedCategory from './useCreatedCategory'
import axios from 'axios'
import useLocalStorage from '../Hooks/useLocalStorage'
import toast from 'react-hot-toast'


function AddNewCategory({ onClose }) {

    // const { isPending, mutate } = useCreatedCategory()
    const [categories, setCategories] = useLocalStorage("categoryWar", [])
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const newCategory = {
            id: new Date().getTime(),
            ...data,
            createdAt: new Date().toISOString()
        }
        try {
            setCategories((p) => [...p, newCategory])
            toast.success(`دسته ببندی ${newCategory.title} اضافه شد`)
            window.location.reload();
        } catch (error) {
            toast.error(error)
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="عنوان دسته بندی"
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
                label="توضیحات"
                name="description"
                register={register}
                required
                validationSchema={{
                    required: "  توضیحات الزامی میباشد",
                    minLength: {
                        value: 5,
                        message: "طول  توضیحات  نامعتبر است"
                    },
                    maxLength: {
                        value: 30
                    }
                }}
                errors={errors}
            />
            <div className='flex mt-8 gap-x-8'>
                <button className='btn btn--primary flex-1'>اضافه کردن دسته بندی</button>
                <button type='onsubmit' onClick={onClose}
                    className='btn border border-secondary-700 px-4 
                text-secondary-700 py-3  flex-1'>لغو</button>
            </div>
        </form>
    )
}

export default AddNewCategory
