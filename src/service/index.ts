import axios from "axios"

export const Api = axios.create({
    baseURL: "https://apiback-end.herokuapp.com/"
})

