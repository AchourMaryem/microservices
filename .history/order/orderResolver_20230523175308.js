// order.js
const db = require('./models');
// Implémentation des résolveurs GraphQL
const orderResolver = {
order: ({ id }) => {
return new Promise((resolve, reject) => {
db.get(`SELECT * FROM orders WHERE id = ?`, [id], (err, row) => {
if (err) {
reject(err);
} else {
resolve(row);
}
});
});
},
orders: () => {
return new Promise((resolve, reject) => {
db.all(`SELECT * FROM orders`, [], (err, rows) => {
if (err) {
reject(err);
} else {
resolve(rows);
}
});
});
},
addOrder: ({ customerID, email, password }) => {
return new Promise((resolve, reject) => {
db.run(`INSERT INTO orders (name, email, password) VALUES (?, ?, ?)`,
[customerID, email, password], function(err) {
if (err) {
reject(err);
} else {
resolve({ id: this.lastID, name, email, password });
}
});
});
}
};
module.exports = orderResolver;