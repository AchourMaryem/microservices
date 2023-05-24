// ticketSchema.js
const { buildSchema } = require('graphql');
// Créer un schéma GraphQL
const ticketSchema = buildSchema(`
type Query {
user(id: Int!): User
users: [User]
}
type Mutation {
addUser(name: String!, email: String!, password: String!): User
}
type User {
id: Int
name: String
email: String
password: String
}
`);
module.exports = ticketSchema;