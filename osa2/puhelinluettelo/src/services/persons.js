/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/persons'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
    // .then(response => response.data)
    // .catch(error => {
    //     console.log('fail')
    // })
}

export default { getAll, create, remove, update }