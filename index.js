const d=document,w=window,n=navigator;


const $bubbles= d.querySelector(".bubbles");
let bubblesNum= 50;



d.addEventListener("DOMContentLoaded",()=>{


    for(let i=0; i < bubblesNum; i++){


        const span= d.createElement("span")
        //span.textContent="hola"
        span.style=`--i:${i * Math.random()}`
        $bubbles.appendChild(span);
        //console.log(i) 
    
    
    }

    


})





