import ArrowRight from '@/shared/assets/arrow-right.svg';
import Logout from '@/shared/assets/logout.svg'
import { NavLink } from 'react-router-dom';
import { TypesOfScreen } from '@/shared/types/index'

type MenuProps = Record<TypesOfScreen, (JSX.Element | string)[]>

const menuHavePermission = [
    <div
        className='mx-4 my-3'
    >
        <NavLink to="/dashboard">
            Dashboard
        </NavLink>
    </div>,
    <div

        className='mx-4 my-3'
    >
        <NavLink to="/suggestions">
            Suggestions
        </NavLink>
    </div>,
    <div
        className='mx-4 my-3'

    >
        <NavLink to="/add">
            Add
        </NavLink>
    </div>,
    <div
    >
        <NavLink
            to="/logout"
            className='flex gap-x-2 items-center mx-8 my-3'
        >
            <Logout />

            Logout
        </NavLink>
    </div>
]

const menuHaventPermission = [
    <div
        className='mx-4 my-3'

    >
        <NavLink to="/movies">
            Movies
        </NavLink>
    </div>,
    <div
        className='my-3 mx-4 '
    >
        <NavLink
            to="/tv-shows"
        >
            TV Shows
        </NavLink>
    </div>,
    <div className='my-3 content-box mx-8'>
        <NavLink
            className='flex gap-x-2 items-center'
            to="/suggest-me">
            Suggest me
            <ArrowRight />
        </NavLink>
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