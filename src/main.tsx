import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Landing from './routes/landing/landing';
import CreateAccount from './routes/create-account/create-account';
import CompanyInformation from './routes/company-information/company-information';
import Orders from './routes/orders/orders';
import Wishlists from './routes/wishlists/wishlists';
import Invoices from './routes/invoices/invoices';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/create-account",
        element: <CreateAccount />,
    },
    {
        path: "/company-information",
        element: <CompanyInformation />,
    },
    {
        path: "/orders",
        element: <Orders />,
    },
    {
        path: "/wishlists",
        element: <Wishlists />,
    },
    {
        path: "/invoices",
        element: <Invoices />,
    },
]);

createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <RouterProvider router={router}/>
      </StrictMode>,
)
