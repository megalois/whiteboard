// Receives events and sends them to a handler

function broadcast(event) {
	console.log(event);
}

function onMouseDown(event) {
	console.log(globals.mouseDown)
	mouseDown();
	broadcast(event);
}

function onMouseDrag(event) {
	mouseDrag();
	broadcast(event);
}

