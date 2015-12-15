//decalration variable
var rand;
var choix;
//acces au dom
var $victoire = document.querySelector('#victoire p');


//random
function $rand() {
    rand = Math.floor((Math.random() * 3) + 1);
}

// comparaison 
function pfc(choix, rand) {
    if (choix === rand) {
        $choix = "match nul";
    } else if (choix == 1 && rand == 2) {
        $choix = "VS Feuille! You win!";
    } else if (choix == 1 && rand == 3) {
        $choix = "VS Ciseaux!Tu as gagné";
    } else if (choix == 2 && rand == 3) {
        $choix = "VS Ciseaux!Coupé!";
    } else if (choix == 2 && rand == 1) {
        $choix = "VS Pierre! Perdu!"
    } else if (choix == 3 && rand == 1) {
        $choix = "VS Pierre !Elle te casse!";
    } else if (choix == 3 && rand == 2) {
        $choix = "VS Feuille !Bien joué !mais tu as perdu....";
    } else {
        $choix = "Quézako!"
    }
    $victoire.innerHTML = $choix;
};

function choixjoueur() {
    choix = document.getElementById('jeux').value;
};
button.onclick = buttonfonction;

function buttonfonction() {
    $rand();
    choixjoueur();
    pfc(choix, rand)
};