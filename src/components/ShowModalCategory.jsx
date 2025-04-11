import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import AddNewCategory from '../category/AddNewCategory'
import Modal from '../Ui/Modal'

function ShowModalCategory() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='order-2 w-full md:mb-4'>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex items-center gap-x-1'>
                <FaPlusCircle className='text-primary-700' />
                دسته بندی جدید
            </button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} title="دسته بندی جدید">
                <AddNewCategory onClose={() => setIsOpen(false)}/>
            </Modal>
        </div>
    )
}

export default ShowModalCategory
