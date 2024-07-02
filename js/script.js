// DEFINISCO UN'ARRAY CON LA LISTA DELLA SPESA
let shoppingList = ['mele', 'anguria', 'banane', 'broccoli', 'pasta', 'pomodori', 'cipolle', 'patate'];
// DEFINISCO LA VARIABILE DELL'INDICE PER IL CICLO WHILE
let i = 0;
// RECUPERO LA UL DAL DOM PER POI ANDARCI AD INSERIRE GLI ELEMENTI LI CHE ANDRÒ A CREARE
const listDestination = document.getElementById('list');
// DEFINISCO IL CICLO WHILE
while (i < shoppingList.length){
    // DEFINISCO UN NUOVO ELEMENTO PER OGNI ELEMENTO DELL'ARRAY CICLATO
    const liElement = document.createElement('li');
    // AGGIUNGO IL CONTENUTO TESTUALE AGLI ELEMENTI LI CREATI 
    liElement.innerText = shoppingList[i];
    
    // INTERROMPO IL CICLO //chiedere la definizione giusta per questo passaggio 
    i ++
}