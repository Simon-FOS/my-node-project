// the 1st step is yo Import the required modules. THis is because Node.js's built-in HTTP module 
// that allows you to create HTTP servers and make HTTP requests.
import http, { Server } from 'http';
import fs from 'fs';

// Step 2: You need to difine the port number on which your server will listen for incoming requests.
// The most common Port number are 3000, 8000, 8080. So I choose 8080
const PORT = 8080;

// Step 3: Create the HTTP server
//http.createServer() creates a new HTTP server.
//It takes a callback function that will be executed for every incoming request.
//The callback receives two objects:
//req (Request): Contains information about the incoming request (URL, headers, etc.)
//res (Response): Used to send data back to the user
const server = http.createServer((req, res) => {
    // Handle incoming requests
    if (req.url === '/') {
        // Read the HTML file
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT} at http://localhost:${PORT}`);
});