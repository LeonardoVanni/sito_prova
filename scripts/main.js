var miaImmagine = document.querySelector('img'); // identifico l'immagine contenuta nella pagina

miaImmagine.onclick = function () {
    var indirizzoImmagine = miaImmagine.getAttribute('src');
    // identifico l'indirizzo dell'immagine contenuto nell'attributo 'src'
    // e poi commuto l'immagine mostrata ad ogni click su di essa
    if (indirizzoImmagine === 'images/boccioni.jpg') {
        miaImmagine.setAttribute('src', 'images/hotdog.jpg');
    } else {
        miaImmagine.setAttribute('src', 'images/boccioni.jpg');
    }
};

var pulsante = document.querySelector('button'); // identifico il pulsante nella pagina
var intestazione = document.querySelector('h1'); // identifico l'intestatzione nella pagina

function impostaNomeUtente() {
    var nomeUtente = prompt('Prego, inserisci il tuo nome.');
    localStorage.getItem('nome', nomeUtente);
    intestazione.textContent = 'Salve ' + nomeUtente + '!';
}
if (!localStorage.getItem('nome')) {
    impostaNomeUtente();
} else {
    var nomeRegistrato = localStorage.getItem('nome');
    intestazione.textContent = 'Bentornato ' + nomeUtente + '!'
}
pulsante.onclick = function () { impostaNomeUtente(); }