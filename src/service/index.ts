import axios from "axios"

export const Api = axios.create({
    // baseURL: process.env.DB_URL,
    baseURL: process.env.API_URL || "http://localhost:5000/"
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

