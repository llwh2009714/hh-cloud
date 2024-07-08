import axios from 'axios'

export function requestService(config){
    const instance=axios.create({
        baseURL: process.env.VUE_APP_BASE_SERVICE,
        timeout: 50000
    })
    instance.interceptors.response.use((res)=>{
        return res.data
    })
    return instance(config)
}