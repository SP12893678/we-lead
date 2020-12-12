import axios from 'axios'

const userRequest = axios.create({
    baseURL: ''
})

export const apiTest = (data) => userRequest.post('', { params: data })
