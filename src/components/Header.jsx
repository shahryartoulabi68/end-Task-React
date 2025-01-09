import { HiMiniSun } from 'react-icons/hi2'
import { useDarkMode } from '../Context/DarkModeContext'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

function Header() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()
    return (
        <div className='w-full text-sm flex items-center gap-x-4 p-4'>
            <h1 className='font-bold text-primary-900'>پروژه انبار داری</h1>

            <button className='text-primary-800'>
                {isDarkMode ?
                    <HiOutlineSun onClick={toggleDarkMode} /> :
                    <HiOutlineMoon onClick={toggleDarkMode} />

                }
            </button>

        </div>
    )
}

export default Header
