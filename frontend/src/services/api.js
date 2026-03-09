import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getServices = async () => {
  const response = await api.get('/services')
  return response.data
}

export const submitContact = async (contactData) => {
  const response = await api.post('/contact', contactData)
  return response.data
}

export default api
