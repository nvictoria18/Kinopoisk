import { Home } from "@/pages/Home";
import { Movies } from "@/pages/Movies";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TVShows from "@/pages/TV Shows/TV Shows";
import { Detail } from "@/pages/Detail";
import { Suggest } from "@/pages/Suggest";

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<h1>Loadinng</h1>}><Home /></Suspense>,
            },
            {
                path: '/movies',
                element: <Suspense fallback={<h1>Loadinng</h1>}><Movies /></Suspense>,
            },
            {
                path: '/tv-shows',
                element: <Suspense fallback={<h1>Loadinng</h1>}><TVShows /></Suspense>,

            },
            {
                path: '/:id',
                element: <Suspense fallback={<h1>Loading</h1>}><Detail /></Suspense>
            },
            {
                path: `/tv-shows/:twShowsId`,
                element: <Suspense fallback={<h1>Loading</h1>}><Detail page="tv-shows" /></Suspense>
            },
            {
                path: `/movies/:moviesId`,
                element: <Suspense fallback={<h1>Loading</h1>}><Detail page="movies" /></Suspense>,

            },
            {
                path: '/suggest-me',
                element: <Suspense fallback={<h1>Loading</h1>}><Suggest /></Suspense>,
            }
        ]
    },
]);

export default router;