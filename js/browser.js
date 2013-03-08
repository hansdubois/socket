var socket

$(function(){
	// The URL of your web server (the port is set in app.js)
	var url = 'http://192.168.10.35:8123';
	socket = io.connect(url);

    socket.on('startBrowserGame', function(){
        startGame();
    });

    socket.on('left', function(){
        move('left');
    });

    socket.on('right', function(){
        move('right');
    });
});

function startGame() {

}

function move(dir) {
    if (dir == 'right') {
        $('#qr').animate({'left': '+=10px'}, 100);
    }else{
        $('#qr').animate({'left': '-=10px'}, 100);
    }
}
