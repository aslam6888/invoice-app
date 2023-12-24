import LoginPage from "../pages/Login/LoginPage.jsx"
import Dashboard from "../pages/Dashboard"
import Pos from "../pages/Pos"
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
                path: '/pos',
                element: <PrivateRoute component={Pos} name={'pos'} />
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