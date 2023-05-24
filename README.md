# microservice
 
This repository demonstrates an example implementation of a combined GraphQL and REST API using Express.js and a SQLite database. The application allows you to manage customer data by performing CRUD operations.

Prerequisites
Before running this application, make sure you have the following installed:

Node.js
npm (Node Package Manager)
Installation
Clone this repository to your local machine.

Navigate to the project directory.

Install the dependencies by running the following command:

bash
Copy code
npm install
Usage
To start the server, run the following command:

bash
Copy code
npm start
The server will start running on port 5001.

API Endpoints
GraphQL Endpoint
You can access the GraphQL endpoint at /graphql. This endpoint allows you to perform GraphQL queries and mutations to interact with the customer data.

Example GraphQL query:

graphql
Copy code
query {
  customers {
    id
    name
    email
  }
}
Example GraphQL mutation:

graphql
Copy code
mutation {
  createCustomer(name: "John Doe", email: "johndoe@example.com", password: "password123") {
    id
    name
    email
  }
}
GraphQL Playground (GraphiQL) is enabled for easy experimentation. You can access it at /graphql.

REST Endpoints
The following REST endpoints are available:

GET /customers: Retrieves all customers from the database.
GET /customer/:id: Retrieves a specific customer by their ID.
POST /customer: Creates a new customer.
PUT /customer/:id: Updates an existing customer by their ID.
DELETE /customer/:id: Deletes a customer by their ID.
Please note that for the REST endpoints, the data is stored in a SQLite database.This repository demonstrates an example implementation of a combined GraphQL and REST API using Express.js and a SQLite database. The application allows you to manage customer data by performing CRUD operations.

Prerequisites
Before running this application, make sure you have the following installed:

Node.js
npm (Node Package Manager)
Installation
Clone this repository to your local machine.

Navigate to the project directory.

Install the dependencies by running the following command:

bash
Copy code
npm install
Usage
To start the server, run the following command:

bash
Copy code
npm start
The server will start running on port 5001.

API Endpoints
GraphQL Endpoint
You can access the GraphQL endpoint at /graphql. This endpoint allows you to perform GraphQL queries and mutations to interact with the customer data.

Example GraphQL query:

graphql
Copy code
query {
  customers {
    id
    name
    email
  }
}
Example GraphQL mutation:

graphql
Copy code
mutation {
  createCustomer(name: "John Doe", email: "johndoe@example.com", password: "password123") {
    id
    name
    email
  }
}
GraphQL Playground (GraphiQL) is enabled for easy experimentation. You can access it at /graphql.

REST Endpoints
The following REST endpoints are available:

GET /customers: Retrieves all customers from the database.
GET /customer/:id: Retrieves a specific customer by their ID.
POST /customer: Creates a new customer.
PUT /customer/:id: Updates an existing customer by their ID.
DELETE /customer/:id: Deletes a customer by their ID.
Please note that for the REST endpoints, the data is stored in a SQLite database.
