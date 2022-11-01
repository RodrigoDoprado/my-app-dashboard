import axios from "axios"
import { getUserLocalStorage } from "../context/authProvider/util"

export const Api = axios.create({
    // baseURL: "https://reqres.in/api",
    //baseURL: "http://localhost:5000",
baseURL:"https://typebackend.herokuapp.com/"
})

// Api.interceptors.request.use(
//     (config) => {
//         const user = getUserLocalStorage();
//         config.headers.Autorization = user?.token

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error)
//     }
// )

