const d=document,w=window,n=navigator;
const $bubbles= d.querySelector(".bubbles");
const $hexagonGallery= d.querySelector(".hexagon-gallery")
let bubblesNum= 50;
let hexagonColumn=3,
hexagonRow= 3;
let draws= [
    //Sketch
 '/assets/astro.jpg',
 '/assets/mercenary.jpg',
 '/assets/warrior.jpg',
 '/assets/detective.jpg']

 let art3d=[
    '/assets/road.jpg',
    '/assets/copCar.jpg',
    '/assets/room.jpg'
 ]

 let conceptArt=[
    '/assets/cabin.jpg',
    '/assets/oldWest.jpg',
    '/assets/nightCity.jpg',
 ]

let mediaQuery= window.matchMedia("(max-width: 768px)");


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
            const imgHex=d.createElement("img")
            imgHex.classList.add("hex__img")

         

        
                if(hexagonRow=== 3 && h!== 2){
    
                    imgHex.src= art3d[i]
                    hex.appendChild(imgHex)
                        
    
                }

                if(hexagonRow === 3 && h === 2){

                    imgHex.src= conceptArt[i]
                    hex.appendChild(imgHex)


                }
                if(hexagonRow === draws.length){
        
                     
                        imgHex.src= draws[i]
                        hex.appendChild(imgHex)   
                                       
        
                }


                


                if(hexagonRow === 5){

                    hexagonRow = conceptArt.length;
                    imgHex.src= conceptArt[i]
                    hex.appendChild(imgHex)
                
                }

             



            

      

        


           

            
        }
        
        $hexagonGallery.appendChild(hexagon);

        if(hexagon.childElementCount === hexagonRow){

            hexagonRow  ++;


        }


    }


const $modal= d.querySelector(".modal");
const $modalImg= d.querySelector(".modal__img");
const $boxImg=d.querySelector(".img__boxImg");

    d.addEventListener("click",(e)=>{

       
        if(e.target.classList.contains("hex__img")){


            $modal.style.display="block";
          console.log("tocaste un hexagono")

            $boxImg.src= e.target.src
            console.log(e.target)
            $modalImg.classList.add("active")
            $modalImg.style.transform="translateY(0%)"

            return

        }

        if(e.target.classList.contains("modal__img")){

            console.log("cierre modal")
            $modal.style.display="none";
            $modalImg.classList.remove("active")
            $modalImg.style.transform="translateY(50%)";

        }


    })

    


})




