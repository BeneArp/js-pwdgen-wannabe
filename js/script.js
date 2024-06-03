// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23



// raccogliere i dati dell'utente

// nome
let nomeUtente = prompt('Inserisci il tuo nome');

// cognome
let cognomeUtente = prompt('Inserisci il tuo cognome');


// colore preferito
let coloreUtente = prompt('Inserisci il tuo colore preferito');


// crezione password dall'unione di nome, cognome e colore preferito
let passwordSicura = nomeUtente + cognomeUtente + coloreUtente + '23';


// stampo in console
console.log(passwordSicura);


// mostra in pagina
