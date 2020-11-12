let mail1 = document.getElementById("mail1");
let motdepasse1 = document.getElementById("motdepasse1");

let mail2 = document.getElementById("mail2");
let motdepasse2 = document.getElementById("motdepasse2");




mail1.addEventListener("click",connexion);
motdepasse1.addEventListener("click",connexion);

mail2.addEventListener("click",connexion);
motdepasse2.addEventListener("click",connexion);




function connexion() {
    if {

        mail1.innerHTML = mail2.innerHTML
        motdepasse1.innerHTML = motdepasse2.innerHTML
        window.location = "accueil.html"

    } else {
        window.confirm("ERROR");
        alert("mot de passe ou mail invalide");

    }
}

