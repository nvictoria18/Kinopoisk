import Logo from '@/shared/assets/logo.svg';
import menu from './Menu';
import { Link } from 'react-router-dom';
import Menu from '@/shared/assets/menu.svg'
import useResize from '@/shared/hooks/useResize';
import { useState } from 'react';

type NavBarProps = {
    isPermission: boolean
}

const Navbar = ({
    isPermission
}: NavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const type = useResize();

    const handleOpenBurger = () => {
        setIsOpen(!isOpen)
    }
    return (<header
        className="bg-gray-900 opacity-80 overflow-hidden"
    >
        <div className="w-full max-w-[1200px] flex m-auto justify-between items-center py-4 md:max-w-[1200px] sm:max-w-[700px]">
            <div>
                <Link to="/">
                    <Logo className='md:w-10 h-10 sm:w-7 h-7' />
                </Link>
            </div>

            <div
                className='hidden md:flex text-gray-200 link-regular gap-x-4 '
            >
                {menu(isPermission)[type].map((item: JSX.Element | string) => item)}
            </div>

            <div style={{
                width: `${isOpen ? '45%' : '24px'}`,
                transform: `translateX(-${isOpen ? 33.3333 : 0}%)`
            }}
                className='relative block md:hidden h-6 w-6
                transition-all ease-in-out duration-300

                '>
                <Menu onClick={handleOpenBurger}
                    className='absolute top-2/4 -translate-2/4 left-2/4 text-gray-200 md:hidden' />
            </div>

            <div
                    style={{
                        width: `${isOpen ? 33.3333 : 0}%`,
                        zIndex: 50
                    }}
                    className='block transition-all ease-in-out duration-300 
                    md:hidden absolute right-0 top-0 
                    bg-primary-500 h-full
                    overflow-hidden
                    '>
                    {menu(isPermission)[type].map((item: JSX.Element | string) => (
                        <div className='px-4 pt-4 pb-4 caption text-primary-300
                        transition-transform ease-in-out duration-300
                        hover:bg-primary-100 whitespace-nowrap

                        '>
                            <Link className='space-x-2' to={`/${item}`}>{item}</Link>
                        </div>
                    ))}
                </div>

        </div>
    </header>)
}

export default Navbar;