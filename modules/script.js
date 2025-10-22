// ======== OS Module ========
// No install needed - it's a built-in "core" module
const os = require('os');

console.log('--- OS Module ---');
console.log('Operating System CPUs:', os.cpus().length);
console.log('Free Memory (bytes):', os.freemem());
console.log('Home Directory:', os.homedir());


// ======== FS (File System) Module ========
// Also a built-in module
const fs = require('fs');

console.log('\n--- FS Module ---');
const content = 'Hello from Node.js!';

// Write to a file (asynchronously)
fs.writeFile('greeting.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File "greeting.txt" has been saved!');

  // Read from a file (asynchronously)
  fs.readFile('greeting.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Read from file:', data);
  });
});


// ======== HTTP Module ========
// This creates a very basic web server
const http = require('http');

const server = http.createServer((req, res) => {
  // req = request (what the user sends)
  // res = response (what you send back)

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello, World!</h1><p>This is a basic HTTP server.</p>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`\n--- HTTP Module ---`);
  console.log(`Basic server running at http://localhost:${port}/`);
  console.log('(Run "node explore.js" and open this URL in a browser)');
});