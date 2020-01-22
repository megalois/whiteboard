paper.install(window);
window.onload = () => {
    paper.setup('canvas');
    const socket = io();
    let path;
    const processMouseDown = (event) => {
        path = new Path();
        path.strokeColor = 'black';
        path.add(event.point);
    }
    const processMouseDrag = (event) => {
        path.add(event.point);
    }

    const processEvent = (event) => {
        eventMap = {
            'mousedown': processMouseDown,
            'mousedrag': processMouseDrag
        }
        if (typeof eventMap[event.type] !== 'undefined') {
            eventMap[event.type](event);
        }
        if (typeof event.emitted === 'undefined') {
            // Send only what is needed
            socket.emit('paperEvent', {
                type: event.type,
                point: event.point,
            });
        }
    }

    socket.on('paperEvent', (event) => {
        event.point = new Point(event.point[1], event.point[2]);
        event.emitted = true;
        processEvent(event);
    });

    tool = new Tool();
    tool.onMouseDown = processEvent;
    tool.onMouseDrag = processEvent;
}
