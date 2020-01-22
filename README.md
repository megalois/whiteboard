# Whiteboard

Real-time shared drawing

## Technology

* Node, Express
* Paper.js
* Socket.io

## Installation

Inside the project folder, run:

```bash
$ npm install
$ node index.js
```

Then open 2 browsers at http://localhost:3000

## Explanation

1. Paper.js handles the events "onMouseDown" and "onMouseDrag". First, it processes them locally, drawing on the canvas. Then, it sends the event information via a socket to the Node server.
2. The server broadcasts the event (sends the event to every socket but the one that sent it). 
3. Finally, the event is received by other clients, and processed with Paper.js in the same way as it was processed in the client that emitted the message.


