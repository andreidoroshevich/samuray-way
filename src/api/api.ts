import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '777d961a-f9a7-4dc0-b651-7f2e8df99fbe'
    }


})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(response => {
                return response.data
            })
    },

    getLogin() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },

    unfollow(id: number) {
        return instance.delete(`follow/$`)
            .then(response => {
                return response.data
            })
    },

    follow(id: number)  {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getUserProfile(userId: number)  {
        return axios.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },

}




