// ticketSchema.js
const { buildSchema } = require('graphql');
// Créer un schéma GraphQL
const ticketSchema = buildSchema(`
type Query {
ticket(id: Int!): Ticket
tickets: [Ticket]
}
type Mutation {
addTicket(HDep: String!, HArri: String!, numVol: Int!): Ticket
}
type Ticket {
id: Int
HDep: String
HArri: String
numVol: Int
}
`);
module.exports = ticketSchema;