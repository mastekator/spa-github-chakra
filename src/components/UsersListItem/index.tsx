// React
import React from 'react'

// Third-party
import {NavLink} from 'react-router-dom'

// App
import {Box, Heading, WrapItem, HStack, Avatar, Button, Link, LinkOverlay, LinkBox} from '@chakra-ui/react'
import {User} from '../../models/user'

type Props = {
    user: User
}

const UsersListItem: React.FC<Props> = (props) => {
    const {user, ...rest} = props

    return (
        <LinkBox as="article" w="full">
            <Box p={4} shadow="md" _hover={{'shadow': 'lg', 'cursor': 'pointer'}} {...rest}>
                <HStack flexDir={['column', 'row']}>
                    <HStack spacing={5} w="full" alignItems="center">
                        <WrapItem>
                            <LinkOverlay as={NavLink} to={`/users/${user.login}`}>
                                <Avatar
                                    size="lg"
                                    name={user.login}
                                    src={user.avatar_url}
                                />
                            </LinkOverlay>
                        </WrapItem>
                        <Heading fontSize="md">{user.login}</Heading>
                    </HStack>
                    <Box>
                        <Button target="_blank" href={user.html_url} as={Link} colorScheme="green">
                            Перейти в профиль
                        </Button>
                    </Box>
                </HStack>
            </Box>
        </LinkBox>
    )
}

export default UsersListItem
