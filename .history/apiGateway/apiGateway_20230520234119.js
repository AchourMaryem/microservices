const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// define routes and their ports 
const routes = {
    '/customer': 'http://localhost:5001',
    '/orders': 'http://localhost:5002',
    '/tickets': 'http://localhost:5000'
};

// create a proxy for each route 
const app = express();
for(const route in routes){
    const target = routes[route];
    app.use(route, createProxyMiddleware({target}));
}

// start the proxy
const PORT = 5003;
app.listen(PORT, () => {
    console.log(`Api-gateway server listening on port ${PORT}`);
}
);

// Test the proxy
// 1. Start all the servers
// 2. Open a browser and navigate to http://localhost:5001/customers
// 3. Open a browser and navigate to http://localhost:5002/orders
// 4. Open a browser and navigate to http://localhost:5000/products