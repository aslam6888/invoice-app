import LoginPage from "../pages/Login/LoginPage.jsx"
import Dashboard from "../pages/Dashboard"
import InvoiceList from "../pages/Invoice/List/InvoiceList.jsx"
import InvoiceCreate from "../pages/Invoice/Create/InvoiceCreate.jsx"
import Inventory from "../pages/Inventory"
import Settings from "../pages/Settings"
import MainLayout from "./layout/MainLayout.jsx"
import PrivateRoute from "./PrivateRoute.jsx"

var routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <PrivateRoute component={Dashboard} name={'dashboard'} />
            },
            {
                path: '/invoices',
                element: <PrivateRoute component={InvoiceList} name={'InvoiceList'} />,
            },
            {
                path: '/invoice/create',
                element: <PrivateRoute component={InvoiceCreate} name={'InvoiceCreate'} />
            },
            {
                path: '/inventory',
                element: <PrivateRoute component={Inventory} name={'inventory'} />
            },
            {
                path: '/settings',
                element: <PrivateRoute component={Settings} name={'settings'}/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }

]

export default routes