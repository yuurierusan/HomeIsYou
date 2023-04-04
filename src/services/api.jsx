import Axios from 'axios'

export const BASE_URL = 'http://127.0.0.1:3000'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (e) => {
        Promise.reject(e)
    }
)

export default Client
