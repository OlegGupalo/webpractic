import { AxiosInstance } from "axios";

export const PostApi = (instance: AxiosInstance) => ({
    async getPost() {
        const {data} = await instance.get('/news/list')
        console.log(data)
        return data
    },
    async getPostById(index: string) {
        const {data} = await instance.get(`/news/${index}`)
        return data
    },
    async getSchhedule(id: string) {
        const {data} = await instance.get(`/group/${id}/schedule`)
        console.log(data)
        return data
    },
    async getFaculty() {
        const {data} = await instance.get('/faculty/list')
        return data
    }

})