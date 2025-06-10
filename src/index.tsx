import { createRoot } from 'react-dom/client';
import '@/index.css';
import App from '@/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { About } from '@/pages/about/index';
import { Shop } from '@/pages/shop';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root);

let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loadinng</h1>}><About count={'dfgdfdfdfdgfsdxgb'} /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<h1>Loading</h1>}><Shop /></Suspense>
            },
        ]
    },
]);

container.render(
    <RouterProvider router={router} />
)