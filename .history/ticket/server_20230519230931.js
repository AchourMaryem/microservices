const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const db = require('./models');
const ticketSchema = require('./ticketSchema');
const ticketResolver = require('./ticketResolver');
const app = express();
const port = 5000;
app.use(bodyParser.json());
// Utilisation de GraphQL pour gérer les requêtes
app.use('/graphql', graphqlHTTP({
schema: ticketSchema,
rootValue: ticketResolver,
graphiql: true
}));

// Utilisation de body-parser pour analyser les demandes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
// Implémentation de l'API REST
app.get('/tickets', (req, res) => {
db.all(`SELECT * FROM users`, [], (err, rows) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(rows);
});
});
app.get('/ticket/:id', (req, res) => {
db.get(`SELECT * FROM tickets WHERE id = ?`, [req.params.id], (err, row) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json(row);
});
});
app.post('/ticket', (req, res) => {
const { name, email, password } = req.body;
db.run(`INSERT INTO tickets (name, email, password) VALUES (?, ?, ?)`, [name,
email, password], (err) => {
if (err) {
res.status(400).json({ "error": err.message });
return;
}
res.json({ "message": "success" });
});
});
app.put('/user/:id', (req, res) => {
    const { name, email, password } = req.body;
    db.run(`UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`,
    [name, email, password, req.params.id], (err) => {
    if (err) {
    res.status(400).json({ "error": err.message });
    return;
    }
    res.json({ "message": "success" });
    });
    });
    app.delete('/user/:id', (req, res) => {
    db.run(`DELETE FROM users WHERE id = ?`, [req.params.id], (err) => {
    if (err) {
    res.status(400).json({ "error": err.message });
    return;
    }
    res.json({ "message": "success" });
    });
    });
    // Lancement du serveur
    app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}.`);
    });