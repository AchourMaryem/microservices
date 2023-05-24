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
updateTicket(id: Int!, name: String!, email: String!, password: String!): Customer
deleteTicket(id: Int!): String
}
type Ticket {
id: Int
HDep: String
HArri: String
numVol: Int
}
`);
module.exports = ticketSchema;