import axios from "axios";

async function getPlugins(limit = null) {
  return await axios.get(`https://fakestoreapi.com/products` + (limit ? `/?limit=${limit}` : '')).then(res => res.data);
}

export { getPlugins };
