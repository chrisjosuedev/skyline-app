import axios from 'axios'
import { getEnvVariables } from "../helpers/getEnvVariables.js"

// prod
const { VITE_API_URL } = getEnvVariables()

const salesApi = axios.create({
  baseURL: '/api/v1',
})

export default salesApi
