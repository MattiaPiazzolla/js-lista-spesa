// DEFINISCO UN'ARRAY CON LA LISTA DELLA SPESA
let shoppingList = ['mele', 'anguria', 'banane', 'broccoli', 'pasta', 'pomodori', 'cipolle', 'patate'];

// RECUPERO IL BOTTONE PER AGGIUNGERE ELEMENTI ALL'ARRAY
let btnAdd = document.getElementById('btnAdd');

// RECUPERO IL VALORE INSERITO NELL'INPUT
const missingItem = document.getElementById('addItem');

    // DEFINISCO LA VARIABILE DELL'INDICE PER IL CICLO WHILE
    let i = 0;
// RECUPERO LA UL DAL DOM PER POI ANDARCI AD INSERIRE GLI ELEMENTI LI CHE ANDRÒ A CREARE
const listDestination = document.getElementById('list');

// DEFINISCO IL CICLO WHILE
while (i < shoppingList.length){
   
    // CHECKBOX
    const checkbox = document.createElement('input');

    // DEFINISCO GLI ATTRIBUTI DELL'INPUT
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('me-3');

    // DEFINISCO UN NUOVO ELEMENTO PER OGNI ELEMENTO DELL'ARRAY CICLATO
    const liElement = document.createElement('li');

    // AGGIUNGO UNA CLASSE AL LI
    liElement.classList.add('customList');

    // AGGIUNGO IL CHECKBOX
    liElement.append (checkbox);

    // CREO IL TESTO DA ANDARE POI AD AGGIUNGERE
    const listText = document.createTextNode(shoppingList[i]);

    // AGGIUNGO IL TESTO 
    liElement.append(listText);

     // APPENDO GLI ELEMENTI NEL DOM
    listDestination.append(liElement);

    // INTERROMPO IL CICLO //chiedere la definizione giusta per questo passaggio 
    i ++;
}

// DICO AL PULSANTE DI ASPETTARE UN EVENTO
btnAdd.addEventListener('click', function(){
    // INSERISCO GLI ELEMENTI NELL'ARRAY
    shoppingList.push(missingItem.value);
    console.log(shoppingList)

    // AGGIUNGO IF PER AGGIUNGERE UNA CONDIZIONE IN CUI NON ESEGUIRE IL CODICE
    if (missingItem.value !== ""){
        // CHECKBOX
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('me-3');
    
        // DEFINISCO UN NUOVO ELEMENTO PER OGNI ELEMENTO DELL'ARRAY CICLATO
        const liElement = document.createElement('li');
        liElement.classList.add('customList');
    
        // AGGIUNGO IL CHECKBOX
        liElement.append (checkbox);
    
         // CREO IL TESTO DA ANDARE POI AD AGGIUNGERE
         const listText = document.createTextNode(missingItem.value);

        //  CANCELLO IL MESSAGGIO DI WARNING
        document.getElementById('warning-custom').classList.add('d-none')
    
         // AGGIUNGO IL TESTO 
        liElement.append(listText);
    
        // APPENDO GLI ELEMENTI NEL DOM
        listDestination.append(liElement);
    
        // RESETTO IL CAMPO INPUT 
        missingItem.value = "";
    } else {
        // FACCIO COMPARIRE UN MESSAGGIO DI WARNIGN
        document.getElementById('warning-custom').classList.remove('d-none')
    }

})

