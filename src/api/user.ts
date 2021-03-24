import {axios} from '@core'

export default {
    fetchUsers: () => axios.get('/users'),
    fetchUserById: (username: string) => axios.get(`/users/${username}`)
}
