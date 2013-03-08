var socket;

$(function(){
	// The URL of your web server (the port is set in app.js)
	var url = 'http://192.168.10.35:8123';
	socket = io.connect(url);
});

function startGame() {
    socket.emit('startGame');
}

function left() {
    socket.emit('left');
}

function right() {
    socket.emit('right');
}
