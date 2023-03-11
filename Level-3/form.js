//For Name 
document.getElementById("name-submit").addEventListener("click",function(){
    passKeyValueToLocalStorage("name","name");
})

document.getElementById("name-delete").addEventListener("click",function(){
    clearByKey("name");
})

//For Email

document.getElementById("email-submit").addEventListener("click",function(){
    passKeyValueToLocalStorage("email","email");
})

document.getElementById("email-delete").addEventListener("click",function(){
    clearByKey("email");
})

//For Message

document.getElementById("msg-submit").addEventListener("click",function(){
    passKeyValueToLocalStorage("message","message");
})

document.getElementById("msg-delete").addEventListener("click",function(){
    clearByKey("message");
})

//reset Button

document.getElementById("reset").addEventListener("click",function(){
    localStorage.clear();
})


const passKeyValueToLocalStorage=(id,keyName)=>{
    const name=document.getElementById(id).value;
    setLocalStorageValue(keyName,name)
}

const setLocalStorageValue=(key,value)=>{
    localStorage.setItem(key,value)
}

const clearByKey=(key)=>{
    localStorage.removeItem(key);
}