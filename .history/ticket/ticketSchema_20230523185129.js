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
updateCustomer(id: Int!, name: String!, email: String!, password: String!): Customer
deleteCustomer(id: Int!): String
}
type Ticket {
id: Int
HDep: String
HArri: String
numVol: Int
}
`);
module.exports = ticketSchema;