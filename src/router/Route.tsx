// React
import React, {Suspense} from 'react'

// Third-party
import {Route as DomRoute} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'

// App
import {RouteType} from './routes'
import {ErrorBlock} from '../components'
import Loader from '../components/ui/Loader'
import {SlideFade} from '@chakra-ui/react'

const Route: React.FC<RouteType> = (route) => {
    return (
        <SlideFade in>
            <ErrorBoundary FallbackComponent={ErrorBlock}>
                <Suspense fallback={<Loader/>}>
                    <DomRoute
                        path={route.path}
                        render={(props) => route.component && <route.component key={route.path} {...props}/>}
                    />
                </Suspense>
            </ErrorBoundary>
        </SlideFade>
    )
}

export default Route
