class Storage{
  set(key,value){
   if(typeof(value)=="object"){
     value=JSON.stringify(value)
   }
   localStorage.setItem(key,value)
  }
  get(key,isObject=true){
    if(isObject){
     return JSON.parse(localStorage.getItem(key))
    }
    return localStorage.getItem(key) 
  }
  remove(){

  }
  clear(){

  }
}
export default new Storage()