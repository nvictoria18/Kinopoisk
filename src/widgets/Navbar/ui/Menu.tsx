import ArrowRight from '@/shared/assets/arrow-right.svg';
import Logout from '@/shared/assets/logout.svg'
import { Link } from 'react-router-dom';
import { TypesOfScreen } from '@/shared/types/index'

type MenuProps = Record<TypesOfScreen, (JSX.Element | string)[]>

const menuHavePermission = [
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
    >
        <Link
            to="/logout"
            className='flex gap-x-2 items-center mx-8 my-3'
        >
            <Logout />

            Logout
        </Link>
    </div>
]

const menuHaventPermission = [
    <div
        className='mx-4 my-3'

    >
        <Link to="/movies">
            Movies
        </Link>
    </div>,
    <div
        className='my-3 mx-4 '
    >
        <Link
            to="/tv-shows"
        >
            TV Shows
        </Link>
    </div>,
    <div className='my-3 content-box mx-8'>
        <Link
            className='flex gap-x-2 items-center'
            to="/suggest-me">
            Suggest me
            <ArrowRight />
        </Link>
    </div>
];

const menu = (isPermission: boolean): MenuProps => isPermission ? (
    {
        mobile: [
            'Dashboard',
            'Suggestions',
            'Add',
            'Logout',
        ],
        laptop: menuHavePermission,
        desktop: menuHavePermission,
    }
) : ({
    mobile: [
        'Movies',
        'TV Shows',
        'Suggest me',
    ],
    laptop: menuHaventPermission,
    desktop: menuHaventPermission
});

export default menu;