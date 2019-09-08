import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const create = async newBlog => {
  const config = {
    headers: { Authorization: token }
  };
  const response = await axios.post(baseUrl, newBlog, config);
  return response.data;
};

const setToken = newToken => {
  console.log("Token is ready");
  token = `bearer ${newToken}`;
};

export default { getAll, create, setToken };
