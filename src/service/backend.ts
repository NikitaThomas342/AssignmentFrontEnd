import axios from 'axios'

const baseUrl = 'http://localhost:4000'

export const createBlog = (body) => {
  axios.post(`${baseUrl}/blogs`, body)
}

export const getBlogs = () => {
  return axios.get(`${baseUrl}/blogs`)
}
