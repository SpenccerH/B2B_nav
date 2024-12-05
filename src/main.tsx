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
import Wishlist from './routes/wishlist/wishlist';
import Cart from './routes/cart/cart';
import CartOut from './routes/cart/cart-out';
import Checkout from './routes/checkout/checkout';
import CheckoutReview from './routes/checkout/checkout-review';
import CheckoutCompleted from './routes/checkout/checkout-completed';
import OrderDetails from './routes/order-details/order-details';
import OrderDetailsPending from './routes/order-details/order-details-pending';
import Account from './routes/account/account';
import SignIn from './routes/sign-in/sign-in';
import ForgotPassword from './routes/sign-in/forgot-password';
import ForgotSubmission from './routes/sign-in/forgot-submission';
import Permissions from './routes/permissions/permissions';
import Shop from './routes/shop/shop';

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
    {
        path: "/wishlist",
        element: <Wishlist />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/cart-out",
        element: <CartOut />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/checkout-review",
        element: <CheckoutReview />,
    },
    {
        path: "/checkout-completed",
        element: <CheckoutCompleted />,
    },
    {
        path: "/order-details",
        element: <OrderDetails />,
    },
    {
        path: "/order-details-pending",
        element: <OrderDetailsPending />,
    },
    {
        path: "/account",
        element: <Account />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/forgot-submission",
        element: <ForgotSubmission />,
    },
    {
        path: "/permissions",
        element: <Permissions />,
    },
    {
        path: "/shop",
        element: <Shop />,
    },
]);

createRoot(document.getElementById('root')!).render(
      <StrictMode>
          <RouterProvider router={router}/>
      </StrictMode>,
)
