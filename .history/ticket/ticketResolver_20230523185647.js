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
addTicket: ({ HDep, HArri, numVol }) => {
return new Promise((resolve, reject) => {
db.run(`INSERT INTO tickets (HDep, HArri, numVol) VALUES (?, ?, ?)`,
[HDep, HArri, numVol], function(err) {
if (err) {
reject(err);
} else {
resolve({ id: this.lastID, HDep, HArri, numVol });
}
});
});
},
updateTicket: ({ id,HDep, HArri, numVol}) => {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE customers SET HDep = ?, HArri = ?, numVol = ? WHERE id = ?',
        [HDep, email, password, id],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id, HDep, HArri, numVol });
          }
        }
      );
    });
  },

deleteCustomer: ({ id }) => {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM customers WHERE id = ?`, [id], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(`Client avec l'ID ${id} supprimé.`);
        }
      });
    });
  }
};
module.exports = ticketResolver;