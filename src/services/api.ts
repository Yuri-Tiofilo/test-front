import axios from 'axios'

const baseUrlApi = process.env.REACT_API_BASE_URL

const api = axios.create({
  baseURL: `${baseUrlApi}`
})

export { api }
