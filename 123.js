let titre = document.getElementById("titre");

let buttongreen = document.getElementById("buttongreen");
let buttonblue = document.getElementById("buttonblue");
let buttonred = document.getElementById("buttonred");


buttongreen.addEventListener("click",NOSCRUBS);
buttonred.addEventListener("click",ALTITUDETRAIN);
buttonblue.addEventListener("click",changetitle);

function NOSCRUBS() {

    titre.innerHTML = "HI"
    window.location.href = "https://www.youtube.com/watch?v=IBdQ4-sCdZw";
}


function ALTITUDETRAIN() {

    titre.innerHTML = "HI"
    window.location.href = "https://www.youtube.com/watch?v=z-vRB294lJQ";
}



console.log(buttongreen);