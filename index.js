const express = require('express');
const bodyParser = require('body-parser');
const nedb = require('nedb-promise');
const cors = require('cors');

const ValidacaoUtils = require('./validacao-utils');

const db = nedb('banco.db');
const app = express();

db.loadDatabase();

app.use(bodyParser.json());
app.use(cors());

const MSG_OK  = "OK";
const MSG_FORMATO_INVALIDO  = "O formato do produto é inválido!";
const MSG_NAO_ENCONTADO  = "Nenhum produto encontrado";

// GET ALL
app.get('/produto', (req, res) => {
    db.find({}).then(produto => {
        if(!produto || !produto.length) {
            res.status(404).send(MSG_NAO_ENCONTADO);
            return;
        }
        res.send(produto);
    }).catch(() => res.status(500).end())
});

// GET ONE
app.get('/produto/:id', (req, res) => {
    db.find({ _id: req.params.id }).then(produto => {
        if(!produto || !produto.length) {
            res.status(404).send(MSG_NAO_ENCONTADO);
            return;
        }
        res.send(produto);
    }).catch(() => res.status(500).end())
});

// INSERT
app.post('/produto', (req, res) => {
    if(ValidacaoUtils.isProdutoValido(req.body)) {
        db.insert(ValidacaoUtils.getCamposValidos(req.body)).then(() => {
            res.send(MSG_OK);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_FORMATO_INVALIDO);
    }
});

// UPDATE
app.put('/produto/:id', (req, res) => {
    if(ValidacaoUtils.isProdutoValido(req.body)) {
        db.update({ _id: req.params.id }, ValidacaoUtils.getCamposValidos(req.body)).then(() => {
            res.send(MSG_OK);
        }).catch(() => res.status(500).end());
    } else {
        res.status(400).send(MSG_FORMATO_INVALIDO);
    }    
});

// DELETE
app.delete('/produto/:id', (req, res) => {
    db.remove({ _id: req.params.id }).then(() => {
        res.send(MSG_OK);
    }).catch(() => res.status(500).end());
});

console.log("Servidor iniciado na porta 8080...")
app.listen(8080, '0.0.0.0');