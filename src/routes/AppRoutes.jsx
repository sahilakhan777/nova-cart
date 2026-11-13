import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayouts from '../layouts/MainLayouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'
const AppRoutes = () => {
    let router = createBrowserRouter([
        {

            path:'/',
            element:<PublicRoutes/>,
            children:[
                {
                    path:'',
                    element:<AuthLayout/>,
                    children:[
                        {
                             path:'',
                            element:<Login/>,
                        },
                        {
                             path:'register',
                            element:<Register/>,
                        }
                    ]
                },
            ]
        },
        {
            path:'/main',
            element:<ProtectedRoutes/>,
            children:[
                {
                    path:'',
                    element:<MainLayouts/>,
                    children:[
                        {
                            path:'',
                            element:<Home/>
                        },
                        {
                            path:'about',
                            element:<About/>
                        },
                        {
                            path:'products',
                            element:<Products/>
                        },
                        {
                            path:'cart',
                            element:<Cart/>,
                        }
                    ]
                },
            ]
        }
    ])
    


  return <RouterProvider router={router}/>
}

export default AppRoutes
