import {ReactText} from 'react'
import {AxiosResponse} from 'axios'
import {axios} from '../core'
import {history} from '../App'
import {User} from '../models/user'

export default {
    fetchUsers: (
        page: ReactText = '1',
        per_page: ReactText = '10'): Promise<AxiosResponse<{ total_count: number, items: User[] }>> => {
        const params = new URLSearchParams({page: page.toString(), per_page: per_page.toString()})
        history.push({
            search: params.toString()
        })
        return axios.get(`/search/users?q=type%3Auser&${params.toString()}`)
    },
    fetchUserById: (username: string): Promise<AxiosResponse> => axios.get(`/users/${username}`)
}
