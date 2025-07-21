import Logo from '@/shared/assets/logo.svg';
import menu from '@/shared/const/menu';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Menu from '@/shared/assets/menu.svg'
import useResize from '@/shared/hooks/useResize';
import { useState, Fragment } from 'react';

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
        className="bg-gray-900 overflow-hidden"
    >
        <div className="w-full max-w-[700px] flex m-auto justify-between items-center py-4 md:max-w-[1200px]">
            <div>
                <Link to="/">
                    <Logo className='min-w-9 min-h-9 pl-2.5 md:w-10 md:pl-0 md:h-10' />
                </Link>
            </div>

            <div
                className='hidden md:flex text-gray-200 link-regular gap-x-4 '
            >
                {menu(isPermission)[type].map((item: JSX.Element | string, index) => <Fragment key={`${index} ${item.toString}`}>{item}</Fragment>)}
            </div>

            <div style={{
                width: `${isOpen ? '45%' : '24px'}`,
                transform: `translateX(-${isOpen ? 33.3333 : 0}%)`
            }}
                className='relative block md:hidden h-6 w-6
                transition-all ease-in-out duration-300 

                '>
                <Menu onClick={handleOpenBurger}
                    className='absolute top-2/4 -translate-2/4 left-1/4 text-gray-200 md:hidden' />
            </div>

            <div
                    style={{
                        width: `${isOpen ? 40 : 0}%`,
                        zIndex: 50
                    }}
                    className='block transition-all ease-in-out duration-300 
                    md:hidden absolute right-0 top-0 
                    bg-black-75 shadow-xl h-full
                    overflow-hidden backdrop-blur-xl
                    '>
                    {menu(isPermission)[type].map((item: JSX.Element | string, index) => (
                        <div className='px-4 pt-4 pb-4 caption text-sm text-primary-300
                        sticky top-1 right-0
                        transition-all ease-in-out duration-300
                        hover:bg-white-50 whitespace-nowrap
                        '
                        key={`${index} ${item}`}
                        >
                            <NavLink className='space-x-2' to={`/${item.toString().split(" ").join("-").toLowerCase()}`}>{item}</NavLink>
                        </div>
                    ))}
                </div>

        </div>
    </header>)
}

export default Navbar;