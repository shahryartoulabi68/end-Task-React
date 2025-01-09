import { data } from "autoprefixer";
import axios from "axios";


const BASE_URL = "http://localhost:3000"


export default function addNewCategory(newCategory) {
    return axios.post(`${BASE_URL}/category`, newCategory).then(({ data }) => data)
}

export function getCategoryApi() {
    return axios.get(`${BASE_URL}/category`).then(({ data }) => data)
}

export function addNewProduct(newProduct) {
    return axios.post(`${BASE_URL}/product`, newProduct).then(({ data }) => data)
}

export function getProductsApi({ search, sortValue, categoryValue }) {

    return axios.get(`${BASE_URL}/product?title_like=${search}&category_like=${categoryValue}&_sort=createdAt&_order=${sortValue}`).then(({ data }) => data)
}

export function deleteProductsApi(_id) {
    return axios.delete(`${BASE_URL}/product/${_id}`).then(({ data }) => data)
}



// GET http://localhost:3000/data?name_like=a&category=A&_sort=id&_order=desc
