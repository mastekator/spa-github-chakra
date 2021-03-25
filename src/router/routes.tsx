// React
import {LazyExoticComponent, lazy, FC} from 'react'

export type RouteType = {
    name: string
    path: string
    exact: boolean
    component?: LazyExoticComponent<FC>
}

const routes: RouteType[] = [
    {
        name: 'Главная',
        path: '/',
        component: lazy(() => import('../pages/Main')),
        exact: true
    },
    {
        name: 'Пользователи',
        path: '/users',
        component: lazy(() => import('../pages/Users')),
        exact: true
    },
    {
        name: 'Пользователь',
        path: '/users/:username',
        component: lazy(() => import('../pages/User')),
        exact: true
    }
]

export default routes
