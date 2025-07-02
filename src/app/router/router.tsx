import { Home } from "@/pages/Home";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<h1>Loadinng</h1>}><Home /></Suspense>
            },
        ]
    },
]);

export default router;