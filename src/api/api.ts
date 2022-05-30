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

    unfollowSuccess(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    followSuccess(id: number)  {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
}


export const profileAPI = {
    getUserProfile(userId: number)  {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number)  {
        return instance.get(`profile/status/` + userId)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status: string)  {
        return instance.put(`profile/status/`, {status: status})
            .then(response => {
                return response.data
            })
    },
}

export const authAPI = {
    getLogin() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe: boolean=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    },

}





