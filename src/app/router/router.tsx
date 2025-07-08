import { Home } from "@/pages/Home";
import { Movies } from "@/pages/Movies";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TVShows from "@/pages/TV Shows/TV Shows";
import { Detail } from "@/pages/Detail";
import { Suggest } from "@/pages/Suggest";
import { SkeletonLoaded } from "@/widgets/SkeletonLoaded";

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<SkeletonLoaded />}><Home /></Suspense>,
            },
            {
                path: '/movies',
                element: <Suspense fallback={<SkeletonLoaded />}><Movies /></Suspense>,
            },
            {
                path: '/tv-shows',
                element: <Suspense fallback={<SkeletonLoaded />}><TVShows /></Suspense>,

            },
            {
                path: '/:id',
                element: <Suspense fallback={<SkeletonLoaded />}><Detail /></Suspense>
            },
            {
                path: `/tv-shows/:twShowsId`,
                element: <Suspense fallback={<SkeletonLoaded />}><Detail page="tv-shows" /></Suspense>
            },
            {
                path: `/movies/:moviesId`,
                element: <Suspense fallback={<SkeletonLoaded />}><Detail page="movies" /></Suspense>,

            },
            {
                path: '/suggest-me',
                element: <Suspense fallback={<SkeletonLoaded />}><Suggest /></Suspense>,
            }
        ]
    },
]);

export default router;