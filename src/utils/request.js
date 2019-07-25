import axios from "axios"

const service=axios.create({
  baseURL:" https://www.easy-mock.com/mock/5d3911c824ff2f226dcaf0b4/boss",
  timeout:10000,
  withCredentials: true //是否携带cookie
})

service.interceptors.request.use((config)=>{
  return config
},(error)=>{
  console.log(error)
})

service.interceptors.response.use((response)=>{
  return response
},(error)=>{
  console.log(error)
})

class Requset{

get(url,params){
 return service({
   url,
   method:"GET",
   params
 })
}
post(url,data){
 return service({
   url,
   method:"POST",
   data
 })
}
}

export default Requset