const cadre = document.getElementById('principal');
const portrait = document.getElementById('visage');
const sousTitre = document.getElementById('legende');
const image = '<img id=\'chapeau\' src=\'./Ressource/HatOli.png\' alt=\'mystere?\'/>';
const texte = '<p id=\'sousTexte\'>Toujours aussi mysterieux?</p>';

function reveler() {
    cadre.innerHTML = image;
    sousTitre.innerHTML = texte;
}

portrait.addEventListener('click', reveler);