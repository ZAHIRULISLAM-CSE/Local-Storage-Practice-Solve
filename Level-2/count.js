document.getElementById("btn").addEventListener("click",function(){
    let countValue=document.getElementById("count-value").innerText;
    countValue=parseInt(countValue);
    countValue++;
    document.getElementById("count-value").innerText=countValue;
    setLocalStorageValue(countValue);
})


setLocalStorageValue=(countVal)=>{
    localStorage.setItem("count",countVal);
}

getValue=()=>{
    const val= localStorage.getItem("count");
    document.getElementById("count-value").innerText=val;
}
getValue();
//setLocalStorageValue();