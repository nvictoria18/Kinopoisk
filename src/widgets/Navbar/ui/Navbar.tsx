import Logo from '@/shared/assets/logo.svg';
import menu from './Menu';
import { Link } from 'react-router-dom';

type NavBar = {
    isPermission: boolean
}

const Navbar = ({
    isPermission
}: NavBar) => {
    return (<header
        className="bg-gray-900 opacity-80"
    >
        <div className="w-full max-w-[1200px] flex m-auto justify-between items-center py-4 laptop:max-w-[1200px] mobile:max-w-[700px]">
            <div>
                <Link to="/">
                    <Logo className='laptop:w-10 h-10 mobile:w-7 h-7' />
                </Link>
            </div>

            <div
                className='flex text-gray-200 link-regular gap-x-4 mobile:text-body-extra-small'
            >
                {menu(isPermission).map((item) => item)}
            </div>


        </div>
    </header>)
}

export default Navbar;