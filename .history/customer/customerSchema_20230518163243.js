// userSchema.js
const { buildSchema } = require('graphql');
// Créer un schéma GraphQL
const customerSchema = buildSchema(`
type Query {
customer(id: Int!): Customer
customers: [User]
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
module.exports = customerSchema;