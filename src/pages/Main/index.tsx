// React
import React from 'react'

// Third-party
import {NavLink} from 'react-router-dom'

// App
import {Container, Stack, Box, Heading, Text, Button, Link} from '@chakra-ui/react'

const Main: React.FC = () => {
    return <Container maxW={'3xl'}>
        <Stack
            as={Box}
            textAlign={'center'}
            spacing={{base: 8, md: 14}}
            py={{base: 20, md: 36}}>
            <Heading
                fontWeight={600}
                fontSize={{base: '2xl', sm: '4xl', md: '6xl'}}
                lineHeight={'110%'}>
                Пользователи из GitHub <br/>
                <Text as={'span'} color={'green.400'}>
                    через github api
                </Text>
            </Heading>
            <Text color={'gray.500'}>
                Загрузка по 10 пользователей на страницу с пагинацией. <br/>
                Страница пользователей и страница одного пользователя
            </Text>
            <Stack
                direction={'column'}
                spacing={3}
                align={'center'}
                alignSelf={'center'}
                position={'relative'}>
                <Button
                    as={NavLink}
                    to="/users"
                    colorScheme={'green'}
                    bg={'green.400'}
                    rounded={'full'}
                    px={6}
                    _hover={{bg: 'green.500'}}>
                    К пользователям
                </Button>
                <Button href="https://github.com/mastekator/spa-github-chakra"
                        as={Link}
                        variant="link"
                        target="_blank"
                        colorScheme={'blue'}
                        size={'sm'}>
                    Узнать больше
                </Button>
            </Stack>
        </Stack>
    </Container>
}

export default Main
