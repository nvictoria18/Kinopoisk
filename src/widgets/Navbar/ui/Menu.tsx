import ArrowRight from '@/shared/assets/arrow-right.svg';
import Logout from '@/shared/assets/logout.svg'
import { Link } from 'react-router-dom';

const menu = (isPermission: boolean): JSX.Element[] => isPermission ? ([
    <div
        className='mx-4 my-3'
    >
        <Link to="/dashboard">
            Dashboard
        </Link>
    </div>,
    <div
    
            className='mx-4 my-3'
>
        <Link to="/suggestions">
            Suggestions

        </Link>
    </div>,
    <div
            className='mx-4 my-3'

    >
        <Link to="/add">
            Add
        </Link>
    </div>,
    <div
            className='mx-4 my-3'

    >
        <Logout />
        <Link to="/logout">
            Logout
        </Link>
    </div>
]) : ([
    <div
            className='mx-4 my-3'

    >
        <Link to="/movies">
            Movies
        </Link>
    </div>,
    <div
            className='mx-4 my-3'

    >
        <Link
            to="/tv-shows"
        >
            TV Shows
        </Link>
    </div>,
    <div className='flex gap-x-2 items-center mx-8 my-3 mobile:mx-4'>
        <Link
            to="/suggest-me"
        >
            Suggest me
        </Link>
        <ArrowRight />
    </div>
]);

export default menu;