import axios from "axios";

export  async function getProductById(id) {
    return await axios.get("https://fakestoreapi.com/products/" + id).then(res => res.data)
}