import { Home } from "@/pages/Home";
import { Movies } from "@/pages/Movies";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TVShows from "@/pages/TV Shows/TV Shows";
import { Detail } from "@/pages/Detail";

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
                children: [
                    {
                        path: `/movies/:id`,
                        element: <Suspense fallback={<h1>Loading</h1>}><Detail name={undefined} /></Suspense>
                    }
                ]
            },
            {
                path: '/tv-shows',
                element: <Suspense fallback={<h1>Loadinng</h1>}><TVShows /></Suspense>,
                children: [
                    {
                        path: `/tv-shows/:id`,
                        element: <Suspense fallback={<h1>Loading</h1>}><Detail name={undefined} /></Suspense>
                    }
                ]
            },
            {
                path: `/:id`,
                element: <Suspense fallback={<h1>Loading</h1>}><Detail name={undefined} /></Suspense>
            }

        ]
    },
]);

export default router;