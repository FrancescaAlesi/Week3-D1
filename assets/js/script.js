/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const utenti = [
	{
		id: 1,
		nome: 'Antonio',
		cognome: 'Rossi',
		eta: 28,
		attivo: true,
		città: 'Milano',
	},
	{
		id: 2,
		nome: 'Anna',
		cognome: 'Bianchi',
		eta: 35,
		attivo: false,
		città: 'Roma',
	},
	{
		id: 3,
		nome: 'Luca',
		cognome: 'Verdi',
		eta: 17,
		attivo: true,
		città: 'Milano',
	},
	{
		id: 4,
		nome: 'Sara',
		cognome: 'Neri',
		eta: 17,
		attivo: true,
		città: 'Torino',
	},
	{
		id: 5,
		nome: 'Marco',
		cognome: 'Gialli',
		eta: 45,
		attivo: false,
		città: 'Roma',
	},
	{
		id: 6,
		nome: 'Chiara',
		cognome: 'Rosa',
		eta: 30,
		attivo: true,
		città: 'Milano',
	},
];

/* ESERCIZIO 1 — Arrow function compatta
   Riscrivi questa funzione come arrow function in forma compatta:
     function quadrato(n) { return n * n; }
   Chiamala con quadrato(5) e stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-1----`);

const quadrato = n => n * n;

console.log(quadrato(7));

/* ESERCIZIO 2 — Destructuring di oggetto
   Crea un oggetto "persona" con almeno 4 properties (es. nome, cognome, eta, città).
   Estrai 3 properties in 3 variabili usando destructuring.
   Stampa le 3 variabili.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-2----`);

const persona = {
    nome: 'Francesca',
	cognome: 'Alesi',
	eta: 19,
    citta: 'Palermo',
}
const {nome, eta, citta} = persona;

console.log(nome);
console.log(eta);
console.log(citta);

/* ESERCIZIO 3 — Destructuring nei parametri
   Scrivi una arrow function "riepilogo" che riceve un utente e ritorna
   "Nome Cognome (eta anni)" usando destructuring nei parametri.
   Chiamala su utenti[0], utenti[1], utenti[2] e stampa i 3 risultati.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-3----`);

const utente = [
    {nome: 'Anna', cognome:'Bianchi', eta: 35},
    {nome: 'Luca', cognome:'Rossi', eta: 20},
    {nome: 'Filomena', cognome:'Azzurri', eta: 65},
]

const riepilogo = ({nome, cognome, eta}) => `${nome} ${cognome} (${eta} anni)`;

console.log(riepilogo(utente[0]));
console.log(riepilogo(utente[1]));
console.log(riepilogo(utente[2]));

/* ESERCIZIO 4 — Spread su array
   Crea numeri = [1, 2, 3].
   Crea una copia indipendente con spread, fai push(99) sulla copia.
   Stampa originale e copia per dimostrare che l'originale non è cambiato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-4----`);

const numeri = [2, 3, 4]; 
const copiaNumeri = [...numeri];

copiaNumeri.push(99);

console.log(`Originale: ${numeri}`);
console.log(`Copia: ${copiaNumeri}`);


/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-5----`);

const frutti  = ['ciliegia', 'fragola'];
const verdure = ['carota', 'radicchio']; 
const cibo = [...frutti, ...verdure];

console.log(cibo);

/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-6----`);

const prodotto = { nome: 'Cuffie', prezzo: 79.99 };
const nuovoProdotto = {...prodotto, disponibile: true};

console.log(nuovoProdotto);

/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "- Nome Cognome (città)".
   Esempio: "- Mario Rossi (Milano)"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-7----`);

utenti.forEach(({nome, cognome, città}) => {
    console.log(`- ${nome} ${cognome} (${città})`)
});

/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-8----`);

const nomiCompleti = utenti.map(({ nome, cognome }) => `${nome} ${cognome}`);

console.log(nomiCompleti);

/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
   "Nome Cognome, città".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-9----`);

const utentiPlus = utenti.map(utenti => ({...utenti, descrizione: `${utenti.nome} ${utenti.cognome}, ${utenti.città}`}));

console.log(utentiPlus[0]);

/* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-10----`);

const utentiAttivi = utenti.filter(utenti => utenti.attivo);

console.log(utentiAttivi);

/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-11----`);

const utentiMagMil = utenti.filter(({ eta, città }) => eta >= 18 && città === 'Milano');

console.log(utentiMagMil);

/* ESERCIZIO 12 — find
   Usa find per trovare il primo utente con id === 4.
   Stampa l'oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-12----`);

const trovato = utenti.find(utenti => utenti.id === 4);

console.log(trovato);

/* ESERCIZIO 13 — reduce
   a) Usa reduce per calcolare l'età media (somma età / numero utenti). Stampa.
   b) Usa reduce per contare il numero di utenti attivi. Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-13----`);

const sommaEta = utenti.reduce((acc, { eta }) => acc + eta, 0);
const etaMedia = sommaEta / utenti.length;

console.log(`Età media: ${etaMedia}`);

const attivi = utenti.reduce((count, {attivo}) => (attivo ? count + 1 : count), 0);

console.log(`Utenti attivi: ${attivi}`);

/* ESERCIZIO 14 — sort
   a) Ordina gli utenti per eta crescente. Stampa l'array di nomi nell'ordine.
   b) Ordina gli utenti per nome alfabeticamente. Stampa l'array di nomi nell'ordine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-14----`);


/* ESERCIZIO 15 — Chaining
   Componi una catena di metodi che:
   - filtra gli utenti attivi
   - trasforma in array di stringhe "Nome Cognome"
   - ordina alfabeticamente
   Stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`----ESERCIZIO-15----`);
