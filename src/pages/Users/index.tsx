// React
import React from 'react'

// App
import {Heading} from '@chakra-ui/react'
import {UsersList} from '../../components'

const Users: React.FC = () => {
    return <>
        <Heading textAlign="center" mb={4}>
            Список пользователей
        </Heading>
        <UsersList/>
    </>
}

export default Users
