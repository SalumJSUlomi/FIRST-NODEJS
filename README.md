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

The official Node.js website has installation instructions for Node.js: <https://www.nodejs.org>

2. **Getting Started:**

Once you have downloaded and installed Node.js on your computer let's try to display "Hello Tanzania" in a web browser.

Create a Node.js file named "firstnode.js" and add the following code:

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

Save the file on your computer: _C\Users\Your Name\firstnode.js_. The code tells the browser to write "Hello Tanzania" if anyone(e.g a web browser) tries to access your computer on port 8000.

## Command Line Interface:

Node.js file must be initiated in the "Command Line Interface(CLI)" program of your computer.

How to open the command line interface of your computer demands on the operating system. For Windows users, press the start button and look for "Command Prompt", or simply type "cmd" in the search field.

Navigate to the folder that contains the file "firstnode.js" the command line interface window should look something like this: _C:\Users\Your Name>_

## Initiate the Node.js File:

The file you have just created must be initiated by Node.js before any action can take place.

Start your command line interface(cli), write node firstnode.js and hit enter.

Initiate "firstnode.js": _C:\Users\Your Name>node firstnode.js_

Now your computer works as a server!

If anyone tries to access your computer on port 8000, they will get a "Hello Tanzania" message in return!

Start your internet browser, and type in the address: http://localhost:8000

Your Browser looks like this

![alt text](img/localhost.png 'localhost:8000')

## Node.js Modules:

### What is a Modules in Node.js?

Consider modules to be the same as Javascript libraries.

A set of functions you want to include in your application.

### Built-in Modules:

Node.js has a set of built-in modules which you can use without any further installation.

### Include Modules:

To include module use the require() function with the name of the module.

```javascript
var http = require('http');
```

Now your application has access to the HTTP Module, and is able to create a server.

```javascript
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello Tanzania');
  })
  .listen(8000);
```

### Create your Own Modules:

You can create your own modules, and easily include them in your applications.

### Example

The following example creates a module that returns a date and time object.

```javascript
exports.myDateTime = function() {
  return Date();
};
```

Use the exports keyword to make properties and methods available outside the module file.

Save the code above in a file called "myfirstmodule.js".

### Include your Own Module

Now you can include and use the module in any of your Node.js files.

### Example

use the module "myfirstmodule" in a "firstnode.js" file, which is a Node.js file.

```javascript
var http = require('http');
var time = require('./myfirstmodule');
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`The date and time are currently: ${time.myDateTime()}`);
    res.end();
  })
  .listen(8000);
```

**Notice that:** We use ./ to locate the module, that means that the module is located in the same folder as the Node.js file.

Save the code above in a file called "firstnode.js", and initiate the file as usual. C:\Users\Your Name>node firstnode.js

After start your internet browser, and type in the address your browser looks like this

![alt text](img/own_module.png 'localhost:8000')

## Node.js HTTP Module

### The Build-in HTTP Module:

Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hypper Text Transfer Protocol(HTTP).

To include the HTTP Module, use the require() method.

```javascript
var http = require('http');
```

### Node.js as a Web Server:

The HTTP Module can create an HTTP server that listens to server ports and gives a response back to the client.

### Example

```javascript
var http = require('http');
// Create a server object
http
  .createServer((req, res) => {
    res.write('Hello World'); // write a response to the client
    res.end(); // end the response
  })
  .listen(8000); // The server object listen on the port 8000
```

The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8000.

Save the code above in a file called "demo_http.js" and initiate the file.

### Add an HTTP Header:

If the response from the HTTP Server is supposed to be displayed as HTML, you should include an HTTP Header with correct content type.

### Example

```javascript
var http = require('http');
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello Kilimanjaro');
    res.end();
  })
  .listen(8000);
```

The first argument of the res.writeHead() method is a status code, 200 means that all is OK, the second argument is an object containing the response headers.

## Read the Query String

The function passed into the http.createServer() has a req argument that represents the request from the client, as an object(http.IncomingMessage object).
This object has a property called "url" which holds the part of the url that comes after the domain name.
### Example
Create the node.js file called demo_http>url.js and write the following codes
```javascript
var http = require('http');
// create server object
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8000);
```
## Split the Query String
There are built-in modules to easy split the query string into readable parts, such as the URL Module.
### Example
Split the query string into readable parts.
```javascript
var http = require('http');
var url = require('url');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + ' ' + q.month;
  res.write(txt);
  res.end();
}).listen(8000);
```
Save the code above in a file called "demo_querystring.js" and initiate the file:
The address:
http://localhost:8000/?year=2020&month=February
Will produce the results 2020 February