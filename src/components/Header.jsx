import { HiMiniSun } from 'react-icons/hi2'
import { useDarkMode } from '../Context/DarkModeContext'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

function Header() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <div className='shadow-md'>
            <div className='w-full container text-sm flex items-center justify-between gap-x-4 p-3 '>
                <h1 className='font-black text-secondary-800 flex-1 text-center'>پروژه انبار داری</h1>

                <button className='text-primary-800'>
                    {isDarkMode ?
                        <HiOutlineSun onClick={toggleDarkMode} />
                        :
                        <HiOutlineMoon onClick={toggleDarkMode} />
                    }
                </button>

            </div>
        </div>
    )
}

export default Header
