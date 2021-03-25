import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const theme = extendTheme({
    colors: {
        black: '#2D3748'
    },
    styles: {
        global: (props) => ({
            body: {
                color: mode('black', 'white')(props),
                bg: mode('white', 'gray.800')(props)
            }
        })
    }
})

export default theme
