function add(){
        event.preventDefault()
const res=document.getElementById("input")
var lielt=document.createElement("li")
lielt.innerText=`${res.value}`
let x=document.createElement("i")
x.setAttribute("class","fa fa-trash")
x.addEventListener("click" ,(()=>{
    lielt.remove()
}))
document.getElementById("ulcontainer").appendChild(lielt).appendChild(x)
    
}



function remove(){
    event.preventDefault()
    document.querySelector("ul").firstChild.remove()
}

