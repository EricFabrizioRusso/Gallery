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
    const queryHex=()=>{

        for(let h=0; h < hexagonColumn; h++){
            

            const hexagon= d.createElement("div")
            hexagon.classList.add("hexagon")
    
            for(let i= 0; i < hexagonRow; i++){
    
    
                
                const hex= d.createElement("div");
                hex.classList.add("hex");
                hexagon.appendChild(hex);
                const imgHex=d.createElement("img")
                imgHex.classList.add("hex__img")
    
                if(h === 0){

                    imgHex.src= draws[i]
                    hex.appendChild(imgHex)  

                }else if(h === 1){

                    imgHex.src= draws[i + 2]
                    hex.appendChild(imgHex) 


                }
                if(h === 2){

                    imgHex.src= draws[i + 3]
                    hex.appendChild(imgHex) 



                }else if(h === 3){

                    imgHex.src= conceptArt[i]
                    hex.appendChild(imgHex) 

                }else if(h === 4){

                    imgHex.src= conceptArt[i + 1]
                    hex.appendChild(imgHex) 

                }else if(h === 5){

                    imgHex.src= conceptArt[i + 2]
                    hex.appendChild(imgHex) 

                }else if(h === 6){

                    imgHex.src= art3d[i]
                    hex.appendChild(imgHex) 

                }else if(h === 7){

                    imgHex.src= art3d[i + 1]
                    hex.appendChild(imgHex) 

                }
             

                
             
             
               


              

     

                    
    
            
            
    
    
                 
    
    
    
                
    
          
    
            
    
    
               
    
                
            }
            
            $hexagonGallery.appendChild(hexagon);
    
            if(hexagon.childElementCount === hexagonRow){
                
                if(hexagonRow === 2){

                    hexagonRow --;


                }
     

                if(h === 6){

                    hexagonRow++;

                }

              

    
    
            }

        




        }
    }
    const createHex=()=>{

        for(let h=0; h < hexagonColumn; h++){
    
            const hexagon= d.createElement("div")
            hexagon.classList.add("hexagon")
    
            for(let i= 0; i < hexagonRow; i++){
    
    
                
                const hex= d.createElement("div");
                hex.classList.add("hex");
                hexagon.appendChild(hex);
                const imgHex=d.createElement("img")
                imgHex.classList.add("hex__img")
    
                    if(hexagonRow=== 2){

                        imgHex.src= art3d[i]
                        hex.appendChild(imgHex)

                     

                    }
    
            
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


    }


const $modal= d.querySelector(".modal");
const $modalImg= d.querySelector(".modal__img");
const $boxImg=d.querySelector(".img__boxImg");

    d.addEventListener("click",(e)=>{

       
        if(e.target.classList.contains("hex__img")){


            $modal.style.display="block";
          

            $boxImg.src= e.target.src
            $modal.classList.add("active")
            $modal.style.transform="translateX(0%)"

          

        }

        if(e.target.classList.contains("modal__img")){

        
            $modalImg.classList.remove("active")
            $modal.style.transform= "translateX(100%)"
        

        }


    })

    if(mediaQuery.matches){
        
        hexagonColumn= 8;
        hexagonRow= 2;
  
        queryHex();

    
    }else{
    
    
    
        createHex();
    
    }
    

    
    
    


})





