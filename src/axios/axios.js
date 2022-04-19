
//import Vue from "vue";
import axios from "axios";

export const requer=axiosa()

 function axiosa(){
    const instance = axios.create({
        // baseURL: "http://127.0.0.1:8888/api/private/v1/",
        baseURL: '/api',
        timeout: 5000
      })
    //   //请求的拦截器
    //   instance.interceptors.request.use((config) => {
    //      config.headers.Authorization=window.sessionStorage.getItem("totke")
    //     return config
    // })

    // //请求的响应器
    // instance.interceptors.response.use((config)=>{
    //   console.log(config+"5555555555555555")

     
    //     return config
    // })
   /* const xhr = {  get(url, data, config) { 
      return new Promise((resolve) => {   
                      instance.get(url, {params: data}, config).then(res => {  
                                                   resolve(res.data)     
                                                 })  
                                                   }) 
                                                 }, 
                                           post(url, data, config) {  
                                               return new Promise((resolve, reject) => {  
                                                     instance.post(url, data, config).then(res => {  
                                                             resolve(res.data)}).catch(err => { 
                                                                     reject(err)     
                                                                     })    
                                                                     })  
                                                                   },  
                                           put(url, data, config) {  
                                               return new Promise((resolve, reject) => { 
                                                      instance.put(url, data, config).then(res => { 
                                                               resolve(res.data) }).catch(err => {
                                                                        reject(err)     
                                                                        })  
                                                                         }) 
                                                                        }, 
                                            delete(url, data, config) { 
                                                return new Promise((resolve, reject) => {
                                                        instance.delete(url, data, config).then(res => {  
                                                                resolve(res.data)}).catch(err => { 
                                                                         reject(err)    
                                                                         })    
                                                                       }) 
                                                                      },};
                                           return xhr;*/
                                           return instance
}