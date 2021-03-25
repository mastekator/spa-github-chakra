// React
import React from 'react'

// Third-party
import {Router} from 'react-router'
import {createBrowserHistory} from 'history'
import {NavLink} from 'react-router-dom'

// App
import {ChakraProvider, Box, Container, Flex, Text, Link} from '@chakra-ui/react'
import {ColorModeSwitcher} from './ColorModeSwitcher'
import {AppRouter, routes} from './router'
import theme from './theme'

export const history = createBrowserHistory()

export const App: React.FC = () => {
    return <ChakraProvider resetCSS theme={theme}>
        <Router history={history}>
            <Box maxH="100vh" minH="100vh">
                <Box
                    pos='relative'
                    zIndex={999}
                    boxShadow="base"
                    mb={4}
                >
                    <Container maxW="container.lg">
                        <Flex
                            as="nav"
                            align="center"
                            justify="space-between"
                            wrap="wrap"
                            w="100%"
                            py={[3]}
                        >
                            <Link as={NavLink} to='/'>
                                <Box>
                                    <Text fontSize="lg" fontWeight="bold">
                                        GitHub Users
                                    </Text>
                                </Box>
                            </Link>
                            <ColorModeSwitcher justifySelf="flex-end"/>
                        </Flex>
                    </Container>
                </Box>
                <Container maxW="container.lg">
                    <AppRouter routes={routes}/>
                </Container>
            </Box>
        </Router>
    </ChakraProvider>
}
