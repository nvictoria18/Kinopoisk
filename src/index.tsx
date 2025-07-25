import { createRoot } from 'react-dom/client';
import '@/app/styles/index.css';
import { RouterProvider } from 'react-router-dom';
import router from '@/app/router/router';
const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root);

container.render(
    <RouterProvider router={router} />
)