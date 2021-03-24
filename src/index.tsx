// React
import React, {StrictMode} from 'react'
import {render} from 'react-dom'

// App
import {App} from './App'
import {ColorModeScript} from '@chakra-ui/react'

render(
    <StrictMode>
        <ColorModeScript/>
        <App/>
    </StrictMode>,
    document.getElementById('root')
)
