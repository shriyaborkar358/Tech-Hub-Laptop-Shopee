function imgChange (){
   const imageElement =document.getElementById("lappy-cards")
   const min = 1;
   const max = 5;
   const mathElement = Math.round (Math.random() * (max-min) + (min));

   console.log(mathElement)
   switch(mathElement){
    case(1) :
    imageElement.src = "./images/laptop-slider-1.jpg";
    break;

    case(2) :
    imageElement.src = "./images/laptop-slider-2.jpg";
    break;
        
    case(3) :
    imageElement.src = "./images/laptop-slider-3.jpg";
    break;
    
    case(4) :
    imageElement.src = "./images/laptop-slider-4.jpg";
    break;   

    case(5) :
    imageElement.src = "./images/laptop-card-4.jpg";
    break; 
   }
}
