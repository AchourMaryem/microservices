const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const db = require('./models');
const userSchema = require('./userSchema');
const userResolver = require('./userResolver');
const app = express();
const port = 5000;
// Utilisation de GraphQL pour gérer les requêtes
app.use('/graphql', graphqlHTTP({
schema: userSchema,
rootValue: userResolver,
graphiql: true
}));
// Utilisation de body-parser pour analyser les demandes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
// Implémentation de l'API REST
app.get('/users', (req, res) => {
db.all(`SELECT * FROM users`, [], (err, rows) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(rows);
});
});
app.get('/user/:id', (req, res) => {
db.get(`SELECT * FROM users WHERE id = ?`, [req.params.id], (err, row) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(row);
});
});
app.post('/user', (req, res) => {
const { name, email, password } = req.body;
db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name,
email, password], (err) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json({ "message": "success" });
});
});