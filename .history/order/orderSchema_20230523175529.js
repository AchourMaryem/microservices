// orderSchema.js
const { buildSchema } = require('graphql');
// Créer un schéma GraphQL
const orderSchema = buildSchema(`
type Query {
order(id: Int!): Order
orders: [Order]
}
type Mutation {
addOrder(customerID: String!, ticketId: String!): Order
}
type Order {
id: Int
customerID: String
email: String
password: String
}
`);
module.exports = orderSchema;