// React
import React, {useEffect, useState} from 'react'

// Third-party
import {useParams} from 'react-router'
import {AxiosError} from 'axios'
import {NavLink} from 'react-router-dom'

// App
import {
    Avatar,
    Heading,
    WrapItem,
    Box,
    HStack,
    Text,
    VStack,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import {userApi} from '../../api'
import {User} from '../../models/user'
import {ErrorBlock, Loader} from '../../components'
import {join, dateConverter} from '../../utils'

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User>()
    const {username} = useParams()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<AxiosError | null>(null)

    useEffect(() => {
        setLoading(true)
        userApi
            .fetchUserById(username)
            .then(({data}) => {
                setUser(data)
            })
            .catch((error: AxiosError) => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }, [])

    if (loading || !user) {
        return <Loader/>
    }
    if (error) {
        return <ErrorBlock/>
    }

    return (
        <>
            <Heading textAlign="center" mb={4}>
                Страница пользователя
            </Heading>

            <Breadcrumb size="sm" mb={4} spacing="8px" separator={<ChevronRightIcon color="gray.500"/>}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink as={NavLink} to="/users">Пользователи</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">{username}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Box w="full" shadow="md" p={4} mb={4}>
                <HStack spacing={8}>
                    <WrapItem>
                        <Avatar
                            size="lg"
                            name={user.login}
                            src={user.avatar_url}
                        />
                    </WrapItem>
                    <VStack spacing={1} alignItems="left">
                        <Heading fontSize="md">{user.name}</Heading>
                        <Text>{join([user.company, user.location])}</Text>
                        <Text fontSize="sm" color="gray">Дата регистрации: {dateConverter(user.created_at)}</Text>
                    </VStack>
                </HStack>
            </Box>
        </>
    )
}

export default UserProfile
