import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchart = async () => {
  const response = await api.get<HouseModel[]>('/artists');

  return response.data;
};

const ApiService = {
  fetchart,
};

export default ApiService;
