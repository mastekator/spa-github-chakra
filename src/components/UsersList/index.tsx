// React
import React, {ReactText, useEffect, useState} from 'react'

// Third-party
import {AxiosError} from 'axios'

// App
import {Box, Divider, VStack} from '@chakra-ui/react'
import UsersListItem from '../UsersListItem'
import {User} from '../../models/user'
import {history} from '../../App'
import {userApi} from '../../api'
import {ErrorBlock, Loader, Pagination} from '../index'

const UsersList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([])
    const [totalUsers, setTotalUsers] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<AxiosError | null>(null)
    const params = new URLSearchParams(history.location.search)
    const page = params.get('page') || undefined
    const perPage = params.get('per_page') || undefined

    const fetchUsers = (page: ReactText = 1, perPage: ReactText = 10) => {
        setLoading(true)
        userApi
            .fetchUsers(page, perPage)
            .then(({data}) => {
                setUsers(data.items)
                setTotalUsers(data.total_count)
            })
            .catch((error: AxiosError) => {
                setError(error)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchUsers(page, perPage)
    }, [])

    if (loading) {
        return <Loader/>
    }
    if (error) {
        return <ErrorBlock/>
    }

    return (
        <Box>
            <VStack spacing={3}>
                {users && users.map((user) => <UsersListItem key={user.id} user={user}/>)}
            </VStack>
            <Divider my={6}/>
            <Pagination
                onPageChange={fetchUsers}
                totalUsers={totalUsers}
                perPage={perPage}
                currentPage={page}
            />
        </Box>
    )
}

export default UsersList
