// Processes events// Receives events and sends them to a handler

var path;

function handleMouseDown(event) {
	path = new Path();
	path.strokeColor = 'black';
}

function handleMouseDrag(event) {
	path.add(event.point);
}

function processEvent(event) {
	handlers = {
		'onMouseDown': handleMouseDown,
		'onMouseDrag': handleMouseDrag
	}
	handlers[event.type]();
}