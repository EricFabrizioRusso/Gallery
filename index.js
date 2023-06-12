const d=document,w=window,n=navigator;


const $bubbles= d.querySelector(".bubbles");
const $hexagonGallery= d.querySelector(".hexagon-gallery")
let bubblesNum= 50;


let hexagonColumn=3,
hexagonRow= 4;



d.addEventListener("DOMContentLoaded",()=>{


    for(let b=0; b < bubblesNum; b++){


        const span= d.createElement("span")
        //span.textContent="hola"
        span.style=`--i:${b * Math.random()}`
        $bubbles.appendChild(span);
        //console.log(i) 
    
    
    }


    for(let h=0; h < hexagonColumn; h++){

        const hexagon= d.createElement("div")
        hexagon.classList.add("hexagon")

        for(let i= 0; i < hexagonRow; i++){

            const hex= d.createElement("div");
            hex.classList.add("hex");
            hexagon.appendChild(hex);

        }

        $hexagonGallery.appendChild(hexagon);

        if(hexagon.childElementCount === hexagonRow){

            hexagonRow --;

        }


    }

    


})





