import axios from 'axios';

export const fetchGithubUser = async (username) => {
  const resp = await axios.get(`https://api.github.com/users/${username}`);
  return resp.data;
};
