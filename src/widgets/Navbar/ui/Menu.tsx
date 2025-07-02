import ArrowRight from '@/shared/assets/arrow-right.svg';
import Logout from '@/shared/assets/logout.svg'
import { Link } from 'react-router-dom';

const menu = (isPermission: boolean): JSX.Element[] => isPermission ? ([
    <div
        className='mx-4 my-3 mobile:mx-2'
    >
        <Link to="/dashboard">
            Dashboard
        </Link>
    </div>,
    <div

        className='mx-4 my-3 mobile:mx-2'
    >
        <Link to="/suggestions">
            Suggestions
        </Link>
    </div>,
    <div
        className='mx-4 my-3  mobile:mx-2'

    >
        <Link to="/add">
            Add
        </Link>
    </div>,
    <div
    >
        <Link
            to="/logout"
            className='flex gap-x-2 items-center mx-8 my-3'
        >
            <Logout />

            Logout
        </Link>
    </div>
]) : ([
    <div
        className='mx-4 my-3 laptop:mx-4 mobile:mx-2'

    >
        <Link to="/movies">
            Movies
        </Link>
    </div>,
    <div
        className='my-3 laptop:mx-4 mobile:mx-2'
    >
        <Link
            to="/tv-shows"
        >
            TV Shows
        </Link>
    </div>,
    <div className='my-3 box-sizing:content-box laptop:mx-8 mobile:mx-2'>
        <Link
            className='flex gap-x-2 items-center'
            to="/suggest-me">
            Suggest me
            <ArrowRight />
        </Link>
    </div>
]);

export default menu;