const Filme = require('./filme');
const { buscarFilme } = require('./funcoes');
const funcoes = require('./funcoes');

const cinema = "Cine House";

console.log(new Filme(1, 'Harry Potter', 90, ["Daniel Radcliffe", "Emma Watson", ], 2001, false));

console.log(cinema);

const catalogo = [];

funcoes.adicionarFilme(new Filme(1, 'Harry Potter', 90, ["Daniel Radcliffe", "Emma Watson", ], 2001, false), catalogo);
funcoes.adicionarFilme(new Filme(2, 'Thor: Amor e Trovão', 120, ["Chris Hemsworth", "Natalie Portman"], 2022, true), catalogo);
funcoes.adicionarFilme(new Filme(3, 'Capitão América', 160, ["Chris Evans", "Hayley Atwell"], 2011, false), catalogo);
funcoes.adicionarFilme(new Filme(4, 'O Homem de Aço', 143, ["Henry Cavill", "Amy Adams"], 2013, false), catalogo);
funcoes.adicionarFilme(new Filme(5, 'Código de Conduta', 110, ["Gerard Butler", "Jamie Foxx"], 2009, false), catalogo);
funcoes.adicionarFilme(new Filme(6, 'Avatar', 160, ["Sam Worthington", "Zoe Saldaña"], 2009, false), catalogo);

console.log(catalogo);

console.log("O filme encontrado foi: " + funcoes.buscarFilme(3, catalogo).titulo);

funcoes.alterarStatusEmCartaz(1, catalogo)
console.log(funcoes.buscarFilme(1, catalogo))








