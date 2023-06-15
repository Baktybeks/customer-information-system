import {links} from "./links"
import {Navigate} from "react-router-dom"

import MainPage from "../pages/mainPage/MainPage"
import Signup from "../components/auth/sighup/Signup"
import Login from "../components/auth/login/Login"
import TariffPage from "../pages/tarifPage/TariffPage"
import UserPage from "../pages/userPage/UserPage"
import Pay from "../components/pay/Pay"
import AppConnection from "../components/appConnection/AppConnection"
import AdminPage from "../pages/adminPage/AdminPage"

export const authRoutes = [
    {
        path: links.admin,
        element: <AdminPage/>
    },
]

export const publicRoutes = [
    {
        path: links.base,
        element: <MainPage/>
    },
    {
        path: links.signup,
        element: <Signup/>
    },
    {
        path: links.login,
        element: <Login/>
    },
    {
        path: links.user + '/:id/',
        element: <UserPage/>
    },
    {
        path: links.tariff + '/:id/',
        element: <TariffPage/>
    },
    {
        path: links.contact,
        element: <AppConnection/>
    },
    {
        path: links.pay,
        element: <Pay/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },
]