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

Save the file on your computer:
```
 C\Users\Your Name\firstnode.js
 ```
 . The code tells the browser to write "Hello Tanzania" if anyone(e.g a web browser) tries to access your computer on port 8000.

## Command Line Interface:

Node.js file must be initiated in the "Command Line Interface(CLI)" program of your computer.

How to open the command line interface of your computer demands on the operating system. For Windows users, press the start button and look for "Command Prompt", or simply type "cmd" in the search field.

Navigate to the folder that contains the file "firstnode.js" the command line interface window should look something like this: 
```
C:\Users\Your Name>
```

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
## Node.js File System Module:
### Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.
To include the File System Module, use the require() method.
To include the File System Module, use the require() method.
```javascript
var fs = require('fs');
```
### Common Use for File System Module:
* Read Files 
* Create Files
* Update Files
* Delete Files
* Rename Files
### Read Files
The fs.readFile() method is used to read files on your computer.
Assume we have the following HTML file, located in the same folder as Node.js.
demo_html.html
```
<html>
   <body>
      <h1>Ngorongoro Crater</h1>
      <p>That crater found in Tanzania it is very good place for tourism</p>
   </body>
</html> 
```
Create a Node.js file that reads the HTML file, and return the content.
```javascript
var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
  fs.readFile('demo_html.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8000);
```
### Create Files
The file system module has methods for creating new files.
* fs.appendFile()
* fs.Open()
* fs.writeFile()

The fs.appendFile() method appends specified content to a file.
If the file does not exist, the file will be created.
### Example 
Create a new file using the appendFile() method
```javascript
var fs = require('fs');
fs.appendFile('mynewfile.txt', 'Hello Serengeti', function(err){
  if(err) throw err;
  console.log('Created');
});
```
The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing" the specified file is open for writing. If the file does not exist an empty file is created.
### Example
Create a new empty file using the fs.open() method
```javascript
var fs = require('fs');
fs.open('myfile.txt', 'w', (err, file)=> {
   if(err) throw err;
   console.log('Saved...')
});
``` 

The fs.writeFile() method replaces the specified file and content if it exist. If the file does not exist, a new file, containing the specified content will be created.
### Example
Create a new file using the fs.writeFile() method.
```javascript
var fs = require('fs');
fs.writeFile('mynewfile.txt', 'Hello Serengeti',(err) => {
  if(err) throw err;
  console.log('Saved....')
});
```
### Update Files
The file system module has methods for updating files.
* fs.appendFile()
* fs.writeFile()

The fs.appendFile() method appends the specified content at the end of the specified file.
### Example
Append "This is my country" to the end of the file "mynewfile.txt".
```javascript
var fs = require('fs');
fs.appendFile('mynewfile.txt', 'This is my country', (err)=> {
  if(err) throw err;
  console.log('Updated...')
});
```
The fs.writeFile() method replaces the specified file and content.
### Example
Replace the content of the file "myfile.txt".
```javascript
var fs = require('fs');
fs.writeFile('myfile.txt', 'This is my country', (err) => {
  if(err) throw err;
  console.log('Updated...')
});
```
### Delete Files
To delete a file with the file system module, use the fs.unlink() method.

The fs.unlink() method delete the specified file.
### Example
Delete "mynewfile.txt".
```javascript
var fs = require('fs');
fs.unlink('mynewfile.txt', (err) => {
  if(err) throw err;
  console.log('File Deleted...');
});
```
### Rename Files
To rename a file with the file system module, use the fs.rename() method.

The fs.rename() method renames the specified file.
### Example 
Rename "mynewfile1.txt" to "myrenamedfile.txt"
```javascript
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err)=> {
  if(err) throw err;
  console.log('File Renamed...');
});
```
## Node.js URL Module
### The Build-in URL Module
The URL module splits up a web address into readable parts.

To include the URL Module, use the require() method
```javascript
var url = require('url');
```
Parse an address with the url.parse()method, and it will return a URL object with each part of the address as properties.
### Example

Split a web address into readable parts.
```javascript
var url = require('url');
var var addr = 'http://localhost:8000/default.html?year=2020&month=february';
var q = url.parse(addr, true);
console.log(q.host); // returns localhost:8000'
console.log(q.pathname); // returns 'default.html'
console.log(q.search); // returns '?year=2020&month=february';
var qdata = q.query; // returns an object {year:2020, month:'february'}
console.log(qdata.month); // returns 'february'
```
### Node.js File Server
Now we know how to parse string, and in the previous chapter we learned how to make Node.js behave as a file server.

Let us combine the two, and serve the file requested by the client.

Create two html files and save them in the same folder as your Node.js files

mount.html
```
<DOCTYPE html>
<html>
  <body>
    <h1>Kilimanjaro</h1>
    <p>I love Mount Kilimanjaro</p>
  </body>
</html>
```
crater.html
```
<DOCTYPE html>
<html>
  <body>
    <h1>Ngorongoro</h1>
    <p>I love to Visit Ngorongoro Crater</p>
  </body>
</html>
```
Create a Node.js file that opens the requested file and returns the contents to the client. If anything goes wrong, throw a 404 error.

demo_fileserver.js
```javascript
var http = require('http');
var url = require('url');
var fs = require('fs');
// Create server object
http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if(err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } else {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(data);
      return res.end();
    }
  });
}).listen(8000);
```
## Node.js NPM
* NPM is a package manager for Node.js packages or modules if you like
* www.npmjs.com host thousands of free packages to download and use
* The NPM program is installed on your computer when you install Node.js
### What is Package?
A package in Node.js contains all files you need for a module

Modules are javascript libraries you can include in your project.
### Download a Package
Downloading a package is very easy.

Open the command line interface and tell NPM to download the package you want.

I want to download a package called "upper-case"

Download "upper-case"
```
C:\Users\Your Name>npm install upper-case
```
Now you have downloaded and installed your first package!

NPM create a forder named "node_modules", where the package will be placed. 

All packages you install in the future will be placed in this folder.

My project now has a folder structure like this
```
C:\Users\My Name\node_module\upper-case
```
### Using a Package
Once the package is installed, it is ready to use.

Include the "upper-case" package the same way you include any other module.
```javascript
var uc = require('upper-case');
```
Create a Node.js file that will convert the output "Hello Tanzania" into upper-case letters
### Example
```javascript
var http = require('http');
var uc = require('upper-case');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase('Hello Tanzania'));
  res.end();
}).listen(8000);
```
## Node.js Events
Node.js is perfect for event driven applications.
### Event in Node.js
Every action on a computer is an event. Like when a connection is made or a file is opened.

Objects in Node.js can fire events. Like readStream object can fires events when opening or closing a file.

### Example
```javascript
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function() {
  console.log('The file is open');
});
```
### Events Module
Node.js has a build-in module called "events", where you can create-, fire- and listen- for your own events.

To include the built-in events module use the require() method.

In addition, all event properties and methods are an instance of an EventEmitter object.

To be able to access these properties and methods, create an EventEmitter object.
```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();
```
## The EventEmitter Object
You can assign event handlers to your own events with the EventEmitter Object.

In the example below we have created a function that will be executed when a "scream" event is fired.

To fire an event use the emit() method.
### Example 
```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();
// Create an event handler
var myEventHandler = function() {
  console.log('I hear a Scream');
}
// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);
// Fire the scream event
eventEmitter.emit('scream');
