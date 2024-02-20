 
 
 function table ( a ) {

 for ( let i = 1; i <= 10; i++ )
    {
 let b=a*i;
        console.log("ok",a,"*",i,"=", b)
    }
 
 }
 let click=document.getElementById("click")
 document.getElementById("click").onclick =()=> {
    
   let n=( document.getElementById("input").value)
   let ans=document.getElementById("ans")
   let re=""
    
   for(let i=1;i<=20;i++){

      // ans.innerHTML+=n,"*",i,"=",n*i;
      // console.log(n,"*",i,"=",n*i)
    let  s=n*i;
      re+=`${n} * ${i}=${s}<br>`
   
      
   }
  
  ans.innerHTML=re+"THANK YOU"
   
 }
tab=(x,y)=>{
console.log(x+y)
}

 let bt=document.getElementById("mode")
 let body=document.querySelector("body")
 let di=document.getElementById("page")
 let cm="white"
 
 bt.addEventListener("click",()=>{
    if(cm==="white"){
      cm="dark"
      body.classList.add("dark")
      body.classList.remove("white")

      body.classList.remove("mix")
      body.style.color="white"

      bt.classList.add("white")
      bt.classList.remove("dark")

      bt.style.backgroundColor="white"
      bt.style.color="black"

      di.style.boxShadow="0 0 500px violet"
    }
else{
  cm="white"
  body.classList.add("white")
  body.classList.remove("dark")

  body.style.  color="black"
  bt.classList.add("dark")

  bt.classList.remove("white")
  bt.style.color="white"

  bt.style.backgroundColor="black"
  di.style.boxShadow="0 0 500px indigo"

  body.classList.remove("mix")
  
}
 })
 TB=(A)=>{
  for ( let i = 1; i <= 10; i++ )
  {
 
      console.log( `${A}*${i}=${A*i}`)
  } 
 }
 document.getElementById("mix").addEventListener("click",()=>{
  body.classList.add("mix")
  
  di.style.boxShadow="0 0 500px red"
 })
 document.getElementById("mix").addEventListener("dblclick",()=>{
  body.classList.remove("mix")
  di.style.boxShadow="0 0 500px black"
 }) 
  
  
