import axios from 'axios';
import { API_SERVER_URL } from './public-config';

export const fetchContests = async () => {
  // access end point to get data
  const res = await axios.get(`${API_SERVER_URL}/contests`);

  // return data
  return res.data.contests;
};
