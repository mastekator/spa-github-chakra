// React
import React from 'react'

// Third-party
import {Switch, Redirect} from 'react-router'

// App
import {RouteType} from './routes'
import {Route} from '.'

type Props = {
    routes: RouteType[]
}

const Router: React.FC<Props> = (props) => {
    const {routes} = props

    return <Switch>
        {routes && routes.map((route: RouteType) => <Route key={route.path} {...route}/>)}
        <Redirect to='/'/>
    </Switch>
}

export default Router
