import React from 'react'
import axios from "axios";


const BASE_URL = "http://localhost:3000"


export default function editProductApi({ id, newProduct }) {
    return axios.patch(`${BASE_URL}/product/${id}`, newProduct).then(({ data }) => data)
}

