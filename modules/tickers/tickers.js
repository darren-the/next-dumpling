import axios from 'axios'

export const getTickers = async () => {
  const url = process.env.baseURL + '/coinmarketcap'
  const response = await axios.get(url)
  return response.data
}
