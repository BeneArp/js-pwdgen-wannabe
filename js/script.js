// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito23



// raccogliere i dati dell'utente

// nome
let nomeUtente = prompt('Inserisci il tuo nome');
// mostra nome inserito in pagina
document.getElementById('nome').innerHTML=nomeUtente;

// cognome
let cognomeUtente = prompt('Inserisci il tuo cognome');
// mostra cognome inserito in pagina
document.getElementById('cognome').innerHTML=cognomeUtente;


// colore preferito
let coloreUtente = prompt('Inserisci il tuo colore preferito');
// mostra colore inserito in pagina
document.getElementById('colore').innerHTML=coloreUtente;


// crezione password dall'unione di nome, cognome e colore preferito
let passwordSicura = nomeUtente + cognomeUtente + coloreUtente + '23';


// stampo in console
console.log(passwordSicura);


// mostra password in pagina
document.getElementById('password').innerHTML=passwordSicura;