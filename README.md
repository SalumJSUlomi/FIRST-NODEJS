# Node.js Tutorial

- Node.js is an open source server enviroment.
- Node.js allows you to run Javascript on the server

### Example

```javascript
var http = require('http');
http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'}).listen(6000);
```

- Node.js is free
- Node.js runs on various platforms (Windows, Linux, Unix, Mac OSX etc).

## Why Node.js?

Node.js uses asynchronous programming.
A common task for a web server can be to open a file on the server and return the content to the client.

### Here is how PHP or ASP handles a file request

1. Sends the task to the computer's file system.
2. Waits while the file system opens and read the file.
3. Returns the content to the client.
4. Ready to handles the next request.

### Here is how Node.js handles a file request

1. Sends the task to the computer's file system.
2. Ready to handle the next request.
3. When the file system has opened and read the file, the server returns the content to the client.
4. Node.js eliminates the waiting, and simply continues with the next request.
5. Node.js runs single-threaded,non-blocking, asynchronously programming, which is very memory efficient.

## What Can Node.js Do?

- Can generate dynamic page content.
- Can create, open, read, write, delete and close files on the server.
- Can collect form data.
- Can add, delete, modify data in your database.

## What is a Node.js Files?

- Node.js files contains tasks that will be executed on certain events.
- A typical event is someone trying to access a port on the server.
- Node.js files must be initiated on the server before having any effect.
- Node.js files have extension ".js".

# Node.js Get Started

1. **Download Node.js:**

#### The official Node.js website has installation instructions for Node.js: <https://www.nodejs.org>

2. **Getting Started:**

#### Once you have downloaded and installed Node.js on your computer let's try to display "Hello Tanzania" in a web browser.

#### Create a Node.js file named "firstnode.js" and add the following code:

```javascript
var http = require('http');
// create server
http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Tanzania');
  })
  .listen(8000);
```

#### Save the file on your computer: _C\Users\Your Name\firstnode.js_
