# Mini projet microservices
This repository demonstrates an example implementation of a combined GraphQL and REST API using Express.js and a SQLite database. 
# Usage
npm init -y
npm install express graphql sqlite3 body-parser express-graphql
# API Endpoints
#REST Endpoints

GET /customers: Retrieves all customers from the database.

GET /customer/:id: Retrieves a specific customer by their ID.

POST /customer: Creates a new customer.

PUT /customer/:id: Updates an existing customer by their ID.


DELETE /customer/:id: Deletes a customer by their ID.

Please note that for the REST endpoints, the data is stored in a SQLite database.
