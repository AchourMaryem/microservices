// ticketResolver.js
const db = require('./models');
// Implémentation des résolveurs GraphQL
const ticketResolver = {
ticket: ({ id }) => {
return new Promise((resolve, reject) => {
db.get(`SELECT * FROM tickets WHERE id = ?`, [id], (err, row) => {
if (err) {
reject(err);
} else {
resolve(row);
}
});
});
},
tickets: () => {
return new Promise((resolve, reject) => {
db.all(`SELECT * FROM tickets`, [], (err, rows) => {
if (err) {
reject(err);
} else {
resolve(rows);
}
});
});
},
addTicket: ({ HDep, HArri, password }) => {
return new Promise((resolve, reject) => {
db.run(`INSERT INTO tickets (name, HArri, password) VALUES (?, ?, ?)`,
[name, HArri, password], function(err) {
if (err) {
reject(err);
} else {
resolve({ id: this.lastID, name, HArri, password });
}
});
});
}
};
module.exports = ticketResolver;