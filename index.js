import express from 'express';

const app = express();

app.get("/pessoa", (req, res) => {
    const pessoa = {nome: "João", idade: 30};
    res.send(pessoa);
})

app.get("/lista-pessoas", (req, res) => {
    const pessoas = [{nome: "João", idade: 30},{nome: "Maria", idade: 20}];
    res.send(pessoas);
})

app.listen(4000);