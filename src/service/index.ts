import axios from "axios"

export const Api = axios.create({
    baseURL: "http://localhost:5000/"
    // baseURL: "https://apiback-end.herokuapp.com/"
})

 