import { AxiosInstance } from "axios";

export const UserApi = (instance: AxiosInstance) => ({
    async singUp(signUpDto: any) {
        const data = await instance.post('/signup', signUpDto)
        return data
    },
    async login(loginDto: any) {
        const data = await instance.post('/login', {loginDto})
        return data
    },
    async profile(token: string) {
        const data = await instance.get('/user/profile', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data
    }

})