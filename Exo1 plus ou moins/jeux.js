var $verification = document.getElementById('verification');
var $solution = document.getElementById("solution");
var i = 0;
$verification.onclick = function () {
    var jeux = (function () {
        var verif = document.getElementById('chiffre').value;
        if (verif > rand) {
            $solution.innerHTML = "Le chiffre est plus bas";
        } else if (verif < rand) {
            $solution.innerHTML = "le chiffre est plus haut";
        } else {
            $solution.innerHTML = "trouvez !!!!! en " + i + " fois";
        }
        i++
    })();
};
var rand = Math.floor((Math.random() * 100) + 1);