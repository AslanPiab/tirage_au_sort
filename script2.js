// Part 1 =  Création d'une checkbox avec le nom du participant.

document.getElementById('boutonAjouterParticipant').addEventListener('click',function() {
var nomParticipant = document.getElementById('nomParticipant').value;

if (nomParticipant) {

    var recupFieldset = document.getElementById('participants');

    var div= document.createElement('div');
    div.className= 'checkbox-groupe';

    //création input dans la div

    var input = document.createElement('input');
    input.type = 'checkbox';
    input.id = nomParticipant;
    input.name = 'participants';
    input.value = nomParticipant;

    //création label 

    var label = document.createElement('label')

    label.htmlFor = nomParticipant;
    label.textContent = nomParticipant;

    //integrer input et label dans div checkbox-groupe
    
    div.appendChild(input);
    div.appendChild(label);

    //ajout de la div checkbox-groupe dans le fieldset

    recupFieldset.appendChild(div);

    // remettre le champ de saisie nomParticipant à zéro apres saisie.

    document.getElementById('nomParticipant').value = '';

    
}});

// Part 2 : Faire un tirage au sort avec les checkboxes

document.getElementById('boutonTirage').addEventListener('click',function(){
//création d'un tableau pour mettre les checkboxes à l'intérieur
    var selectionParticipant = [];
//récupération des checkboxes
    var checkboxes = document.querySelectorAll('#participants input[type="checkbox"]:checked');

    //ajout de chaque checkboxes dans le tableau 'selectionParticipant'
    checkboxes.forEach(function(checkbox){
        selectionParticipant.push(checkbox.value);
    });

    if(selectionParticipant.length > 0){
        var gagnant = selectionParticipant[Math.floor(Math.random() * selectionParticipant.length)];

        document.getElementById('resultatTirage').textContent = 'Au tableau ' + gagnant +' !';
    }
    else {
        document.getElementById('resultatTirage').textContent = 'Sans selection de participant..pas de gagnant!"Pas de bras ? pas de chocolat!"';
    }
});

var allSelect = false;

// Fonction pour basculer toutes les cases à cocher
document.getElementById('boutonAllSelect').addEventListener('click', function() {
    var checkboxes = document.querySelectorAll('#participants input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = !allSelect;
    });
    allSelect = !allSelect; // Inverser l'état pour le prochain clic
});

document.getElementById('afpaTeam').addEventListener('click',function(){

    var checkboxesAfpa = `<div>
    <input type="checkbox" id="pierre" name="prenom" value="Pierre">
    <label for="pierre">Pierre</label>
</div>
<div>
    <input type="checkbox" id="lucas" name="prenom" value="Lucas">
    <label for="lucas">Lucas</label>
</div>
<div>
    <input type="checkbox" id="barbara" name="prenom" value="Barbara">
    <label for="barbara">Barbara</label>
</div>
<div>
    <input type="checkbox" id="florian" name="prenom" value="Florian">
    <label for="florian">Florian</label>
</div>
<div>
    <input type="checkbox" id="swan" name="prenom" value="Swan">
    <label for="swan">Swan</label>
</div>
<div>
    <input type="checkbox" id="dan" name="prenom" value="Dan">
    <label for="dan">Dan</label>
</div>
<div>
    <input type="checkbox" id="mathias" name="prenom" value="Mathias">
    <label for="mathias">Mathias</label>
</div>
<div>
    <input type="checkbox" id="alexandre" name="prenom" value="Alexandre">
    <label for="alexandre">Alexandre</label>
</div>
<div>
    <input type="checkbox" id="mustapha" name="prenom" value="Mustapha">
    <label for="mustapha">Mustapha</label>
</div>
<div>
    <input type="checkbox" id="rajan" name="prenom" value="Rajan">
    <label for="rajan">Rajan</label>
</div>
<div>
    <input type="checkbox" id="nanji" name="prenom" value="Nanji">
    <label for="nanji">Nanji</label>
</div>
<div>
    <input type="checkbox" id="nantenaina" name="prenom" value="Nantenaina">
    <label for="nantenaina">Nantenaina</label>
</div>
<div>
    <input type="checkbox" id="loic" name="prenom" value="Loic">
    <label for="loic">Loic</label>
</div>
<div>
    <input type="checkbox" id="erwan" name="prenom" value="Erwan">
    <label for="erwan">Erwan</label>
</div>
<div>
    <input type="checkbox" id="vincent" name="prenom" value="Vincent">
    <label for="vincent">Vincent</label>
</div>
<div>
    <input type="checkbox" id="antoine" name="prenom" value="Antoine">
    <label for="antoine">Antoine</label>
</div>
<div>
    <input type="checkbox" id="antonin" name="prenom" value="Antonin">
    <label for="antonin">Antonin</label>
</div>`;

var listeParticipants = document.getElementById('participants');

listeParticipants.innerHTML = checkboxesAfpa;
});