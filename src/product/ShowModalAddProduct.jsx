import React, { useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from '../Ui/Modal'
import NewProduct from './NewProduct'

function ShowModalAddProduct() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className=' w-full md:order-2'>
            {isMobile ? <>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='flex items-center gap-x-1'>
                    <FaPlusCircle className='text-primary-700' />
                    اضافه کردن به انبار
                </button>
                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <NewProduct onClose={() => setIsOpen(false)}/>
                </Modal>
            </>
                :
                <NewProduct />
            }
        </div>
    )
}

export default ShowModalAddProduct
