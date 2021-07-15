import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://dv-student-backend-2019.appspot.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/students')
    }
}