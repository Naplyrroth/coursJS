let titre = document.getElementById("titre");

let buttongreen = document.getElementById("buttongreen");
let buttonblue = document.getElementById("buttonblue");
let buttonred = document.getElementById("buttonred");
let buttonpurple = document.getElementById("buttonpurple");


buttongreen.addEventListener("click",NOSCRUBS);
buttonred.addEventListener("click",ALTITUDETRAIN);
buttonblue.addEventListener("click",AFTERDARK);
buttonpurple.addEventListener("click",PARADISECITY);


function NOSCRUBS() {

    
    window.location.href = "https://www.youtube.com/watch?v=IBdQ4-sCdZw";
}


function ALTITUDETRAIN() {

   
    window.location.href = "https://www.youtube.com/watch?v=z-vRB294lJQ";
}

function AFTERDARK() {

    
    window.location.href = "https://www.youtube.com/watch?v=waAlgFq9Xq8";
}

function PARADISECITY() {

    
    window.location.href = "https://www.youtube.com/watch?v=Rbm6GXllBiw";
}


console.log(buttongreen);
